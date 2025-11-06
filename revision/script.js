
  function getNum(id) {
    const el = document.getElementById(id);
    const val = parseFloat(el.value);
    return isNaN(val) ? 0 : val; // returns 0 if empty
  }

  function calculateTotal() {
    const cw = getNum('coursework');  // /30
    const mid = getNum('midterm');    // /30
    const fin = getNum('finalexam');  // /40
    const total = Math.min(100, Math.max(0, cw + mid + fin)); // total out of 100
    document.getElementById('totalOut').value = total.toFixed(2);
    return total;
  }

  function calculateAverage() {
    const total = calculateTotal();
    const avg = total / 5;
    document.getElementById('avgOut').value = avg.toFixed(2);
    return avg;
  }

  function calculateGrade() {
    const avg = calculateAverage() * 5;
    let grade = '';

    if (avg >= 70 && avg <= 100) grade = 'A';
    else if (avg >= 60 && avg < 70) grade = 'B';
    else if (avg >= 50 && avg < 60) grade = 'C';
    else grade = 'Failed';

    document.getElementById('gradeOut').value = grade;
  }

  // Auto-update when inputs change
  ['coursework', 'midterm', 'finalexam'].forEach(id => {
    document.getElementById(id).addEventListener('input', calculateGrade);
  });

