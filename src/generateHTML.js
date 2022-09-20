const Employee = require("../lib/Employee");

const generateManager = function (manager) {
    const x =
    `
        <div class="w-96 h-96 bg-gray-100 rounded-xl shadow-xl flex flex-col">
            <div class="w-full h-24 bg-gray-800 rounded-lg flex flex-col justify-center align-center">
                <h3 class="text-4xl text-white text-center">${manager.name}</h3>
            </div>
            <div class="w-full flex flex-col justify-center align-center py-10">
                    <p class="text-2xl px-4 py-4">E-ID: <span class="text-red-600">${manager.id}</span></p>
                    <p class="text-2xl px-4 py-4">Email: <a href="mailto:${manager.email}" class="text-red-600">${manager.email}</a></p>
                    <p class="text-2xl px-4 py-4">Office #: <span class="text-red-600">${manager.number}</span></p>
            </div>
        </div>
    `;
    return x;
}

const generateEngineer = function (engineer) {
    const y =
    `
        <div class="w-96 h-96 bg-gray-100 rounded-xl shadow-xl flex flex-col">
            <div class="w-full h-24 bg-blue-800 rounded-lg flex flex-col justify-center align-center">
                <h3 class="text-4xl text-white text-center">${engineer.name}</h3>
            </div>
            <div class="w-full flex flex-col justify-center align-center py-10">
                    <p class="text-2xl px-4 py-4">E-ID: <span class="text-red-600">${engineer.id}</span></p>
                    <p class="text-2xl px-4 py-4">Email: <a href="mailto:${engineer.email}" class="text-red-600">${engineer.email}</a></p>
                    <p class="text-2xl px-4 py-4">Github: <a href="https://github.com/${engineer.github}" class="text-red-600">${engineer.github}</a></p>
            </div>
        </div>
    
    `;
    return y;
}

const generateIntern = function (intern) {
    const z =
    `
        <div class="w-96 h-96 bg-gray-100 rounded-xl shadow-xl flex flex-col">
            <div class="w-full h-24 bg-green-600 rounded-lg flex flex-col justify-center align-center">
                <h3 class="text-4xl text-white text-center">${intern.name}</h3>
            </div>
            <div class="w-full flex flex-col justify-center align-center py-10">
                <p class="text-2xl px-4 py-4">E-ID: <span class="text-red-600">${intern.id}</span></p>
                <p class="text-2xl px-4 py-4">Email: <a href="mailto:${intern.email}" class="text-red-600">${intern.email}</a> </p>
                <p class="text-2xl px-4 py-4">School: <span class="text-red-600">${intern.school}</span></p>
            </div>
        </div>
    `;
    return z;
}

generateHTML = (data) => {
    managerArray = [];
    engineerArray = [];
    internArray = [];

    for (let i = 0; i < data.length; i++) {
        const testEmployee = data[i];
        const role = testEmployee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(testEmployee);
            managerArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(testEmployee);
            engineerArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(testEmployee);
            internArray.push(internCard);
        }
    };

    const managerCards = managerArray.join('');
    const engineerCards = engineerArray.join('');
    const internCards = internArray.join('');

    const generateTeam = generateTeamPage(managerCards, engineerCards, internCards);
    return generateTeam;

    console.log(managerCards);
    
}

const generateTeamPage = function (managerCards, engineerCards, internCards) {
    let htmlPage =
    `
    
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DAO Team Members</title>
            <link rel="stylesheet" href="https://unpkg.com/tailwindcss@next/dist/tailwind.min.css" />
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <div class="py-20 w-screen h-auto" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
                <div class="container mx-auto px-6 flex justify-center">
                    <h1 class="text-8xl font-bold mb-2 text-white text-center">DAO Team</h1>
                </div>
            </div>
    
            <div class="py-10 w-screen h-auto flex justify-center align-center gap-16">
                <div class="flex flex-col justify-center align-center">
                    <h3 class="text-6xl text-red-600 text-center">Managers</h3>
                    <div class="managers py-10 px-10 w-screen flex flex-wrap justify-center gap-16">
    
                        ${managerCards}
    
                    </div>
                </div>
            </div>
    
            <div class="py-10 w-screen h-auto flex justify-center align-center gap-16">
                <div class="flex flex-col justify-center align-center">
                    <h3 class="text-6xl text-red-600 text-center">Engineers</h3>
                    <div class="engineers py-10 px-10 w-screen flex flex-wrap justify-center gap-16">
    
                       ${engineerCards}
    
                    </div>
                </div>
            </div>
    
            <div class="py-10 w-screen h-auto flex justify-center align-center gap-16">
                <div class="flex flex-col justify-center align-center">
                    <h3 class="text-6xl text-red-600 text-center">Interns</h3>
                    <div class="interns py-10 px-10 w-screen flex flex-wrap justify-center gap-16">
    
                        ${internCards}
    
                    </div>
                </div>
            </div>
    
        </body>
    </html>

    `;
    return htmlPage;
}

module.exports = generateHTML;