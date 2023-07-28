 document.addEventListener("DOMContentLoaded", function() {
      const gridContainer = document.querySelector(".grid-container");
      
      // Create 6 block elements and add them to the grid container
      for (let i = 0; i < 6; i++) {
        const blockElement = document.createElement("div");
        blockElement.classList.add("block");
        gridContainer.appendChild(blockElement);
      }