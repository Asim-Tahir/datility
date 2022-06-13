import "./style.css";
import "datility";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <p>
      Let's play around with the new 
      <code>Date</code>
      utilities coming via
      <code>datility</code>:
        <time>${new Date().addWorkingDays(3).toLocaleString()}</time>
    </p>
  `;
}
