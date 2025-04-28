add.addEventListener('click', function () {
    const n1 = Number(num1.value)
    const n2 = Number(num2.value)

    if (isNaN(n1) || isNaN(n2)) {
        p.innerHTML = "ERROR";
        p.classList = "bg-red-600 w-20 m-auto rounded-lg text-white";
    } else {
        p.innerHTML = `${n1 + n2}`
        p.classList = "bg-green-600 w-20 m-auto rounded-lg text-white";
    }
});

sub.addEventListener('click', function () {
    const n1 = Number(num1.value)
    const n2 = Number(num2.value)

    if (isNaN(n1) || isNaN(n2)) {
        p.innerHTML = "ERROR";
        p.classList = "bg-red-600 w-20 m-auto rounded-lg text-white";
    } else {
        p.innerHTML = `${n1 - n2}`
        p.classList = "bg-green-600 w-20 m-auto rounded-lg text-white";
    }
});

div.addEventListener('click', function () {
    const n1 = Number(num1.value)
    const n2 = Number(num2.value)
    if (isNaN(n1) || isNaN(n2)) {
        p.innerHTML = "ERROR";
        p.classList = "bg-red-600 w-20 m-auto rounded-lg text-white";
    } else {
        p.innerHTML = `${n1 / n2}`
        p.classList = "bg-green-600 w-20 m-auto rounded-lg text-white";
    }
});

mul.addEventListener('click', function () {
    const n1 = Number(num1.value)
    const n2 = Number(num2.value)

    if (isNaN(n1) || isNaN(n2)) {
        p.innerHTML = "ERROR";
        p.classList = "bg-red-600 w-20 m-auto rounded-lg text-white";
    } else {
       p.innerHTML = `${n1 * n2}`
        p.classList = "bg-green-600 w-20 m-auto rounded-lg text-white";
    }
});
