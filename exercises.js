function showExerciseData(exercise) {
    if (exercise == "endurance") {
        var info = document.querySelector("#info")
        var one = `
        <h2>Kestävyysvoimaharjoitus</h2>

        <ol>
            <li>Ota hyvä asento ja valmistaudu harjoitukseen. Voit olla seistä, istua tai olla selälläsi.</li>
            <li>Supista lantionpohjan lihakset ja pidä supistus 10 sekuntia.</li>
            <li>Rentouta lantionpohjan lihakset 10 sekuntia.</li>
            <li>Toista 10 kertaa.</li>
            <li>Lopuksi keskity hengitykseen ja rentoudu 2 minuutin ajan.</li>
        </ol>
        `;
        info.innerHTML=one;
    }

    else if (exercise == "maximum") {
        var info = document.querySelector("#info")
        var one = `
        <h2>Maksimivoimaharjoitus</h2>

        <ol>
            <li>Ota hyvä asento ja valmistaudu harjoitukseen. Voit olla seistä, istua tai olla selälläsi.</li>
            <li>Supista lantionpohjan lihakset ja pidä supistus 5 sekuntia.</li>
            <li>Rentouta lantionpohjan lihakset 10 sekuntia.</li>
            <li>Toista 5 kertaa.</li>
            <li>Lopuksi keskity hengitykseen ja rentoudu 2 minuutin ajan.</li>
        </ol>
        `;
        info.innerHTML=one;
    }

    else if (exercise == "quickcontrol") {
        var info = document.querySelector("#info")
        var one = `
        <h2>Nopeusvoimaharjoitus</h2>

        <ol>
            <li>Ota hyvä asento ja valmistaudu harjoitukseen. Voit olla seistä, istua tai olla selälläsi.</li>
            <li>Supista lantionpohjan lihakset ja pidä supistus 2 sekuntia.</li>
            <li>Rentouta lantionpohjan lihakset 5 sekuntia.</li>
            <li>Toista 10 kertaa.</li>
            <li>Lopuksi keskity hengitykseen ja rentoudu 2 minuutin ajan.</li>
        </ol>
        `;
        info.innerHTML=one;
    }
    
    else { 
        document.getElementById("info").innerHTML = "Harjoitusohjeet tulevat tähän.";
    };
}