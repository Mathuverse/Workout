const workouts = {
    monday: [
        { name: "Bench Press", img: "assets/benchP.jpg", d:"4 SETS 4-6 REPS" },
        { name: "Chest-Supported Row", img: "assets/supportedR.jpeg",d:"3 SETS 6-8 REPS" },
        { name: "Overhead press", img: "assets/overheadP.jpeg",d:"3 SETS 8-10 REPS" },
        { name: "Lat Pulldown", img: "assets/latP.jpeg", d:"3 SETS 10-12 REPS" },
        { name: "High to Low Cable Flies", img: "assets/high-cable-fly.gif",d:"3 SETS 12-15 REPS" },
        { name: "Face Pulls", img: "assets/facePull.gif",d:"3 SETS 10-12 REPS" },
    ],
    tuesday: [
        { name: "Squat", img: "assets/squat.jpeg", d:"3 SETS 10-12 REPS" },
        { name: "Deadlift", img: "assets/barbell-deadlift.webp",d:"4 SETS 6-8 REPS" },
        { name: "Barbell Hip Thrust", img: "assets/hip.jpeg",d:"4 SETS 8-12 REPS" },
        { name: "Single Leg Weighted Calf Raise", img: "assets/calf.png", d:"3 SETS 6-8 REPS" },
        { name: "Leg Press Calf Raise", img: "assets/legP-calf.jpeg",d:"3 SETS 8-12 REPS" },
    ],
    wednesday: [
        { name: "Cardio", img: "assets/get-ready-to-run-n.jpg",d:"30-40mins" }
    ],
    thursday: [
        { name: "Incline Dumbbell Press", img: "assets/incline-dumbbell-bench.jpeg", d:"3 SETS 8-10 REPS" },
        { name: "Flat Dumbbell Press", img: "assets/dumbbell-bench.jpeg",d:"4 SETS 6-8, 8-10, 10-12" },
        { name: "Lateral Raises (Cable & Dumbbell)", img: "assets/cable-lateral-raise-1000x1000.jpg",d:"4 SETS 8-12 REPS" },
        { name: "Overhead Rope Extensions", img: "assets/cable-overhead-tricep-extension-1000x1000.jpg", d:"3 SETS 12-15 REPS" },
        { name: "Bar Tricep Pushdowns", img: "assets/straight-bar-tricep-pushdown.gif",d:"3 SETS 8-12 REPS" },
        { name: "Cardio", img: "assets/get-ready-to-run-n.jpg",d:"30-40mins" }
    ],
    friday: [
        { name: "Assisted pull-ups", img: "assets/assisted-pull-up-machine.gif", d:"3 SETS 4-6, 6-8, 8-10 REPS" },
        { name: "Seated Row", img: "assets/seated-cable-row-1000x1000.jpg", d:" SETS 8-10 REPS" },
        { name: "Reverse Pec Deck", img: "assets/seated-reverse-fly.gif", d:"3 SETS 10-12 REPS" },
        { name: "Face Pulls", img: "assets/facePull.gif", d:"4 SETS 10-15 REPS" },
        { name: "Incline Dumbbell Curls", img: "assets/incline-dumbbell-curl.gif", d:"3 SETS 8-10 REPS" },
        { name: "Hammer Curls", img: "assets/hammer.jpeg", d:"3 SETS 10-12 REPS" },
        { name: "Cardio", img: "assets/get-ready-to-run-n.jpg",d:"30-40mins" }
    ],
    saturday: [
        { name: "Squat", img: "assets/squat.jpeg", d:"4 SETS 8-12 REPS" },
        { name: "Bulgarian Split", img: "assets/bulgarian-split-squat-1000x1000.jpg", d:"4 SETS 8-10 REPS" },
        { name: "Glute Ham Raise", img: "assets/Weighted-Back-Extension.gif", d:"4 SETS 10-12 REPS" },
        { name: "Face Pulls", img: "assets/facePull.gif", d:"4 SETS 10-15 REPS" },
        { name: "Smith Machine Calf Raises", img: "assets/smith-machine-calf-raise.gif", d:"3 SETS 10-15 REPS" },
        { name: "Seated Weighted Calf Raise", img: "assets/seated-calf-raise-1000x1000.jpg", d:"3 SETS 10-15 REPS" },
    ],
    sunday: [
        { name: "Cardio", img: "assets/get-ready-to-run-n.jpg",d:"30-40mins" }
    ]
    // Define the rest of the days similarly
};


function showWorkouts(day) {
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = ''; // Clear previous workouts
    const listGroup = document.createElement('div');
    listGroup.className = 'list-group';
    workouts[day].forEach(workout => {
        const workoutItem = document.createElement('a');
        workoutItem.className = 'list-group-item list-group-item-action flex-column align-items-start';
        workoutItem.innerHTML = `
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${workout.name}</h5>
            </div>
            <p class="mb-1">${workout.d}</p>
            <small>Click for details.</small>
            <img src="${workout.img}" class="img-fluid mt-2" alt="${workout.name}">
        `;
        listGroup.appendChild(workoutItem);
    });
    workoutList.appendChild(listGroup);
}

