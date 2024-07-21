const cells = document.querySelectorAll('.cell'); // انتخاب تمام خانه‌ها

const winningCombinations = [ // تعریف ترکیب‌های برنده
    [0, 1, 2], // ترکیب برنده در سطر اول
    [3, 4, 5], // ترکیب برنده در سطر دوم
    [6, 7, 8], // ترکیب برنده در سطر سوم
    [0, 3, 6], // ترکیب برنده در ستون اول
    [1, 4, 7], // ترکیب برنده در ستون دوم
    [2, 5, 8], // ترکیب برنده در ستون سوم
    [0, 4, 8], // ترکیب برنده در قطر اول
    [2, 4, 6]  // ترکیب برنده در قطر دوم
];

let currentPlayer = 'X'; // شروع بازی با بازیکن X

const handleClick = (e) => { // تعریف تابع برای مدیریت کلیک روی خانه‌ها
    const cell = e.target; // دریافت خانه‌ای که کلیک شده
    const index = cell.dataset.index; // دریافت اندیس خانه کلیک شده

    if (cell.textContent === '') { // بررسی اینکه خانه خالی باشد
        cell.textContent = currentPlayer; // قرار دادن علامت بازیکن فعلی در خانه
        if (checkWin()) { // بررسی برنده شدن
            alert(`${currentPlayer} wins!`); // نمایش پیام برنده شدن
            resetGame(); // ریست کردن بازی
        } else if (isDraw()) { // بررسی تساوی
            alert(`It's a draw!`); // نمایش پیام تساوی
            resetGame(); // ریست کردن بازی
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // تغییر نوبت بازیکن
        }
    }
};

const checkWin = () => { // تعریف تابع برای بررسی برنده شدن
    return winningCombinations.some(combination => { // بررسی هر ترکیب برنده
        return combination.every(index => { // بررسی هر اندیس در ترکیب
            return cells[index].textContent === currentPlayer; // بررسی اینکه همه خانه‌ها توسط بازیکن فعلی پر شده باشد
        });
    });
};

const isDraw = () => { // تعریف تابع برای بررسی تساوی
    return [...cells].every(cell => cell.textContent !== ''); // بررسی اینکه همه خانه‌ها پر شده باشد
};

const resetGame = () => { // تعریف تابع برای ریست کردن بازی
    cells.forEach(cell => cell.textContent = ''); // خالی کردن تمام خانه‌ها
    currentPlayer = 'X'; // بازنشانی بازیکن به X
};

cells.forEach(cell => cell.addEventListener('click', handleClick)); // افزودن رویداد کلیک به هر خانه