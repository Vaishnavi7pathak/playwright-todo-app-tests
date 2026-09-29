🚀 Project Overview-

This project automates critical user workflows of the TodoMVC React Application, showcasing:

Resilient Locator Strategies using getByRole and getByTestId
Atomic Test Design principles
Page Interventions (Input, Click, Filter, Check)
State Verification & Assertions

🛠️ Tech Stack
Automation Tool: Playwright
Language: JavaScript
Test Runner: Playwright Test
Reporting: Playwright HTML Reporter
📂 Test Scenarios Covered
The project includes atomic tests (todo.spec.js) covering:

✅ Task Creation: Adding multiple Todo items dynamically
✅ Task Management: Marking items as completed
✅ Filtering: Verifying 'Active' vs 'Completed' filters
✅ Verification: Asserting visibility and state of todo items

🏃‍♂️ How to Run
Clone the repository:
git clone https://github.com/pratik9905/MiniProject_PlayWright.git
Install dependencies:
npm install
Run tests (Headless):
npx playwright test
Run tests (Headed):
npx playwright test --headed
View Report:
npx playwright show-report
