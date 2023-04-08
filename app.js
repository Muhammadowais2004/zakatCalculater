const input = document.getElementById("n1");
    const button = document.querySelector(".btn");
    const answer = document.getElementById("answer");

    // Add a click event listener to the button
    button.addEventListener("click", () => {
      // Get the value of the input
      const totalMoney = input.value;

      // Calculate the zakat amount
      const zakat = totalMoney * 0.025;

      // Set the value of the answer input field to the zakat amount
      answer.value = zakat;
    });