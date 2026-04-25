const chapters = [
  {
    id: "1",
    title: "Chapter 1: Fundamentals of Testing",
    sections: [

      {
        id: "1.1",
        title: "What is Testing?",
        children: [

          {
            id: "1.1.1",
            title: "Objectives of Testing",
            content: `
🔹 Definition:
Testing is a set of activities conducted to facilitate the discovery of defects and to evaluate the quality of software artifacts.

🔹 Explanation:
Testing is not only about finding bugs, but also about:
- Verifying requirements are met
- Validating the system works as expected
- Reducing risks
- Building confidence in the system

🔹 Example:
Login feature:
- Correct input → login success
- Wrong password → error message

🔹 Note:
Testing shows the presence of defects, not their absence
          `
          },

          {
            id: "1.1.2",
            title: "Testing and Debugging",
            content: `
🔹 Definition:
Testing is the activity of identifying defects, while debugging is the activity of analyzing and removing the causes of those defects.

🔹 Explanation:
- Testing → detect failures
- Debugging → fix root cause

🔹 Example:
Tester finds login failure  
→ Developer checks code → fixes API issue

🔹 Note:
Testing ≠ Debugging (very common exam question)
          `
          }

        ]
      },

      {
        id: "1.2",
        title: "Why is Testing Necessary?",
        children: [

          {
            id: "1.2.1",
            title: "Contribution of Testing",
            content: `
🔹 Definition:
Testing contributes to software quality by identifying defects and reducing risks.

🔹 Explanation:
Testing helps:
- Prevent failures
- Improve product quality
- Support release decisions

🔹 Example:
Banking system error → wrong transaction  
→ Testing prevents financial loss

🔹 Note:
Testing supports decision making (release or not)
          `
          },

          {
            id: "1.2.2",
            title: "Causes of Defects",
            content: `
🔹 Definition:
Defects are caused by human errors during software development.

🔹 Explanation:
Common causes:
- Misunderstood requirements
- Time pressure
- Complex logic
- Poor communication

🔹 Example:
Requirement says “age > 18”  
Developer writes “>= 18” → defect

🔹 Note:
Human error is the main source of defects
          `
          },

          {
            id: "1.2.3",
            title: "Consequences of Defects",
            content: `
🔹 Definition:
Defects can cause system failures that impact users and businesses.

🔹 Explanation:
Defects may lead to:
- Financial loss
- Security issues
- Reputation damage

🔹 Example:
- App crash → user leaves
- Data leak → legal issue

🔹 Note:
High-risk systems require more testing
          `
          }

        ]
      },

      {
        id: "1.3",
        title: "Testing Principles",
        children: [

          {
            id: "1.3.1",
            title: "Seven Testing Principles",
            content: `
🔹 Definition:
The seven principles provide general guidelines for testing.

---

1. Testing shows presence of defects  
→ Testing finds bugs, not proves no bugs

2. Exhaustive testing is impossible  
→ Cannot test everything

3. Early testing saves time and money  
→ Fix bugs earlier = cheaper

4. Defect clustering  
→ Most bugs are in few modules

5. Pesticide paradox  
→ Same tests stop finding new bugs

6. Testing is context dependent  
→ Different systems need different testing

7. Absence-of-errors fallacy  
→ No bugs ≠ useful system

---

🔹 Example:
Login module has many bugs → defect clustering

🔹 Note:
Very important → appears frequently in exam
          `
          }

        ]
      },

      {
        id: "1.4",
        title: "Test Activities and Tasks",
        children: [

          {
            id: "1.4.1",
            title: "Test Process",
            content: `
🔹 Definition:
The test process is a set of activities performed to achieve testing objectives.

---

1. Test Planning

🔹 Definition:
Defining test objectives and determining how testing will be performed.

🔹 Example:
Decide scope, resources, schedule

---

2. Test Monitoring and Control

🔹 Definition:
Monitoring testing progress and taking corrective actions.

🔹 Example:
Track execution → adjust plan if delayed

---

3. Test Analysis

🔹 Definition:
Analyzing the test basis to identify test conditions.

🔹 Example:
Read requirements → define what to test

---

4. Test Design

🔹 Definition:
Designing test cases and test data.

🔹 Example:
Create test cases for valid/invalid inputs

---

5. Test Implementation

🔹 Definition:
Preparing testware for execution.

🔹 Example:
Prepare test data, environment

---

6. Test Execution

🔹 Definition:
Executing test cases and comparing results.

🔹 Example:
Run login test → verify output

---

7. Test Completion

🔹 Definition:
Finalizing testing activities and reporting results.

🔹 Example:
Write test report, archive data

---

🔹 Note:
Must understand purpose of each activity (exam favorite)
          `
          }

        ]
      },

      {
        id: "1.5",
        title: "Essential Skills and Good Practices",
        children: [

          {
            id: "1.5.1",
            title: "Skills",
            content: `
🔹 Definition:
Testers require a combination of technical and soft skills.

🔹 Explanation:
Key skills:
- Analytical thinking
- Attention to detail
- Communication
- Technical knowledge

🔹 Example:
Clear bug report helps developer fix faster

🔹 Note:
Communication skill is critical
          `
          },

          {
            id: "1.5.2",
            title: "Whole Team Approach",
            content: `
🔹 Definition:
Testing is a shared responsibility across the team.

🔹 Explanation:
All roles contribute to quality:
- Developers
- Testers
- Business analysts

🔹 Example:
Developer writes unit tests  
Tester performs system testing

🔹 Note:
Common in Agile environments
          `
          },

          {
            id: "1.5.3",
            title: "Independence of Testing",
            content: `
🔹 Definition:
Testing performed by someone independent from development.

🔹 Explanation:
Independent testers are more objective and find more defects.

🔹 Example:
Developer misses own bug  
Tester detects it

🔹 Note:
Higher independence → higher effectiveness
          `
          }

        ]
      }

    ]
  },

  {
    id: "2",
    title: "Chapter 2: Testing Throughout the Software Development Lifecycle",
    sections: [

      {
        id: "2.1",
        title: "Software Development Lifecycle Models",
        children: [

          {
            id: "2.1.1",
            title: "Impact of SDLC on Testing",
            content: `
🔹 Definition:
Different Software Development Lifecycle (SDLC) models influence the timing, level, and type of testing.

🔹 Explanation:
Testing is adapted depending on the development approach:
- Sequential (Waterfall)
- Iterative
- Agile

Each model changes when and how testing is performed.

🔹 Example:
- Waterfall → testing happens late
- Agile → testing happens continuously

🔹 Note:
Testing must align with development lifecycle
          `
          },

          {
            id: "2.1.2",
            title: "SDLC Models in Context",
            content: `
🔹 Definition:
SDLC models define how software is developed and tested.

🔹 Explanation:

Common models:
- Waterfall: linear, structured
- V-model: testing linked to development phases
- Agile: iterative, fast feedback

🔹 Example:
Agile team:
- Daily testing
- Continuous integration

🔹 Note:
V-model often appears in exam
          `
          }

        ]
      },

      {
        id: "2.2",
        title: "Test Levels",
        children: [{
          id: "2.2.1",
          title: "Component Testing",
          content: `
🔹 Definition:
Testing individual components or units in isolation.

🔹 Explanation:
Focus on small parts of the system before integration.

🔹 Example:
Test a function:
calculateTotalPrice()

🔹 Note:
Usually performed by developers
          `
        },

        {
          id: "2.2.2",
          title: "Integration Testing",
          content: `
🔹 Definition:
Testing interactions between integrated components.

🔹 Explanation:
Ensure components work together correctly.

🔹 Example:
Frontend calls backend API → verify response

🔹 Note:
Focus on interfaces between modules
          `
        },

        {
          id: "2.2.3",
          title: "System Testing",
          content: `
🔹 Definition:
Testing the complete integrated system.

🔹 Explanation:
Validate system against specified requirements.

🔹 Example:
Test full e-commerce flow:
Login → Add to cart → Checkout

🔹 Note:
Done in environment close to production
          `
        },

        {
          id: "2.2.4",
          title: "Acceptance Testing",
          content: `
🔹 Definition:
Testing conducted to determine whether the system satisfies user needs and business requirements.

🔹 Explanation:
Focus on validating business value.

🔹 Example:
Client verifies system before go-live

🔹 Note:
UAT (User Acceptance Testing) is common
          `
        }
        ]
      },

      {
        id: "2.3",
        title: "Test Types",
        children: [

          {
            id: "2.3.1",
            title: "Functional Testing",
            content: `
🔹 Definition:
Testing based on functional requirements.

🔹 Explanation:
Verifies what the system does.

🔹 Example:
Login works correctly

🔹 Note:
Focus on expected behavior
          `
          },

          {
            id: "2.3.2",
            title: "Non-functional Testing",
            content: `
🔹 Definition:
Testing non-functional aspects such as performance, usability, and security.

🔹 Explanation:
Verifies how the system behaves.

🔹 Example:
- Performance: load test
- Security: penetration test

🔹 Note:
Often missed but very important
          `
          }

        ]
      },

      {
        id: "2.4",
        title: "Maintenance Testing",
        children: [

          {
            id: "2.4.1",
            title: "Types of Maintenance",
            content: `
🔹 Definition:
Maintenance testing is testing changes to an existing system.

🔹 Explanation:
Types of maintenance:
- Corrective: fix defects
- Adaptive: adapt to new environment
- Perfective: improve performance
- Preventive: avoid future issues

🔹 Example:
Fix login bug → corrective maintenance

🔹 Note:
Regression testing is important here
          `
          },

          {
            id: "2.4.2",
            title: "Regression and Impact Analysis",
            content: `
🔹 Definition:
Regression testing ensures that changes have not negatively affected existing functionality.

🔹 Explanation:
Impact analysis determines what areas are affected by changes.

🔹 Example:
Change payment module → retest checkout flow

🔹 Note:
Regression testing = VERY IMPORTANT in real projects
          `
          }

        ]
      }

    ]
  },

  {
    id: "3",
    title: "Chapter 3: Static Testing",
    sections: [

      {
        id: "3.1",
        title: "Static Testing Basics",
        children: [

          {
            id: "3.1.1",
            title: "Work Products",
            content: `
🔹 Definition:
Work products are any artifacts produced during the software development lifecycle that can be reviewed.

🔹 Explanation:
These include:
- Requirements
- Design documents
- Code
- Test cases

Static testing focuses on reviewing these without executing code.

🔹 Example:
Reviewing a requirement document to find ambiguity

🔹 Note:
Static testing happens BEFORE execution
          `
          },

          {
            id: "3.1.2",
            title: "Benefits of Static Testing",
            content: `
🔹 Definition:
Static testing helps detect defects early in development.

🔹 Explanation:
Benefits include:
- Early defect detection
- Reduced cost
- Improved quality

🔹 Example:
Finding requirement error → avoids costly fix later

🔹 Note:
Earlier defect → cheaper to fix (VERY IMPORTANT)
          `
          },

          {
            id: "3.1.3",
            title: "Differences Between Static and Dynamic Testing",
            content: `
🔹 Definition:
Static testing does not require code execution, while dynamic testing does.

🔹 Explanation:

Static Testing:
- Reviews documents/code
- No execution

Dynamic Testing:
- Executes software
- Finds runtime defects

🔹 Example:
- Static: review requirement
- Dynamic: run test case

🔹 Note:
Static = early phase  
Dynamic = execution phase
          `
          }

        ]
      },

      {
        id: "3.2",
        title: "Review Process",
        children: [

          {
            id: "3.2.1",
            title: "Review Process Activities",
            content: `
🔹 Definition:
A review is a type of static testing used to evaluate work products.

🔹 Explanation:
Main review activities:

1. Planning  
2. Initiation  
3. Individual Review  
4. Communication & Analysis  
5. Fixing & Reporting  

🔹 Example:
Team reviews requirement document → finds unclear logic

🔹 Note:
Review process structure is often in exam
          `
          },

          {
            id: "3.2.2",
            title: "Roles and Responsibilities",
            content: `
🔹 Definition:
Different roles participate in the review process.

🔹 Explanation:
Key roles:
- Author: creates document
- Reviewer: checks document
- Moderator: manages review
- Scribe: records issues

🔹 Example:
Tester reviews requirement → logs defects

🔹 Note:
Moderator ensures process runs smoothly
          `
          },

          {
            id: "3.2.3",
            title: "Review Types",
            content: `
🔹 Definition:
Different types of reviews provide different levels of formality.

🔹 Explanation:

Types:
- Informal Review: quick, no structure
- Walkthrough: author explains
- Technical Review: expert evaluation
- Inspection: formal, strict process

🔹 Example:
Code review meeting → technical review

🔹 Note:
Inspection = most formal (exam favorite)
          `
          },

          {
            id: "3.2.4",
            title: "Success Factors for Reviews",
            content: `
🔹 Definition:
Certain factors influence the effectiveness of reviews.

🔹 Explanation:
Success factors:
- Clear objectives
- Trained participants
- Good communication
- Management support

🔹 Example:
Team with good collaboration → better defect detection

🔹 Note:
People factor is very important
          `
          }

        ]
      }

    ]
  },
  {
    id: "4",
    title: "Chapter 4: Test Techniques",
    sections: [

      {
        id: "4.1",
        title: "Test Techniques Overview",
        children: [

          {
            id: "4.1.1",
            title: "Types of Test Techniques",
            content: `
🔹 Definition:
Test techniques are methods used to design test cases.

🔹 Explanation:
There are 3 main categories:

1. Black-box techniques (specification-based)
2. White-box techniques (structure-based)
3. Experience-based techniques

🔹 Example:
- Black-box → based on requirement
- White-box → based on code
- Experience → based on tester knowledge

🔹 Note:
Must distinguish 3 types clearly (exam favorite)
          `
          }

        ]
      },

      {
        id: "4.2",
        title: "Black-box Test Techniques",
        children: [

          {
            id: "4.2.1",
            title: "Equivalence Partitioning",
            content: `
🔹 Definition:
Dividing input data into partitions where all values are expected to behave similarly.

🔹 Explanation:
Instead of testing all values, test one representative from each group.

🔹 Example:
Age input: 0–100

Partitions:
- Invalid: <0
- Valid: 0–100
- Invalid: >100

Test:
- -1, 50, 150

🔹 Note:
Reduces number of test cases
          `
          },

          {
            id: "4.2.2",
            title: "Boundary Value Analysis",
            content: `
🔹 Definition:
Testing boundaries of input ranges where defects are more likely.

🔹 Explanation:
Focus on edge values:
- Minimum
- Maximum
- Just inside/outside boundaries

🔹 Example:
Range: 1–100

Test:
- 0, 1, 2
- 99, 100, 101

🔹 Note:
Very common exam question
          `
          },

          {
            id: "4.2.3",
            title: "Decision Table Testing",
            content: `
🔹 Definition:
Using tables to represent combinations of conditions and actions.

🔹 Explanation:
Each row = condition  
Each column = rule

🔹 Example:
Login:

| Username | Password | Result |
|---------|---------|--------|
| Correct | Correct | Success |
| Wrong   | Any     | Fail |

🔹 Note:
Useful for complex business rules
          `
          },

          {
            id: "4.2.4",
            title: "State Transition Testing",
            content: `
🔹 Definition:
Testing based on system states and transitions.

🔹 Explanation:
System changes state based on events.

🔹 Example:
ATM:
- Insert card → Enter PIN → Withdraw

🔹 Note:
Focus on valid and invalid transitions
          `
          }

        ]
      },

      {
        id: "4.3",
        title: "White-box Test Techniques",
        children: [

          {
            id: "4.3.1",
            title: "Statement Testing",
            content: `
🔹 Definition:
Ensuring each statement in code is executed at least once.

🔹 Explanation:
Measure coverage of code execution.

🔹 Example:
If (x > 0) → ensure this line runs

🔹 Note:
Coverage = % of executed statements
          `
          },

          {
            id: "4.3.2",
            title: "Decision Testing",
            content: `
🔹 Definition:
Ensuring each decision outcome (true/false) is tested.

🔹 Explanation:
Covers both branches of conditions.

🔹 Example:
if (x > 0)
- x = 1 → true
- x = -1 → false

🔹 Note:
Stronger than statement coverage
          `
          }

        ]
      },

      {
        id: "4.4",
        title: "Experience-based Test Techniques",
        children: [

          {
            id: "4.4.1",
            title: "Error Guessing",
            content: `
🔹 Definition:
Using experience to guess where defects might occur.

🔹 Explanation:
Based on past bugs and intuition.

🔹 Example:
Tester suspects login issue → tests empty input

🔹 Note:
Depends on tester skill
          `
          },

          {
            id: "4.4.2",
            title: "Exploratory Testing",
            content: `
🔹 Definition:
Testing where design and execution happen simultaneously.

🔹 Explanation:
Tester explores system without predefined test cases.

🔹 Example:
Click around app to find unexpected issues

🔹 Note:
Flexible but requires experience
          `
          },

          {
            id: "4.4.3",
            title: "Checklist-based Testing",
            content: `
🔹 Definition:
Testing based on predefined checklist of items.

🔹 Explanation:
Ensures important areas are not missed.

🔹 Example:
Checklist:
- UI alignment
- Error messages
- Input validation

🔹 Note:
Good for beginners
          `
          }

        ]
      },
      {
        id: "4.5",
        title: "ISTQB Exam-style Questions",
        children: [

          {
            id: "4.5.1",
            title: "Equivalence Partitioning",
            content: `
❓ Question:
An input field accepts values from 1 to 100.

Which of the following sets is the BEST choice for equivalence partitioning?

A. 1, 50, 100  
B. 0, 50, 101  
C. 1, 2, 99, 100  
D. 0, 1, 100, 101  

✅ Answer: B

🔹 Explanation:
Equivalence Partitioning divides into:
- Invalid (<1) → 0
- Valid (1–100) → 50
- Invalid (>100) → 101

So B is correct.
      `
          },

          {
            id: "4.5.2",
            title: "Boundary Value Analysis",
            content: `
❓ Question:
Which set represents Boundary Value Analysis for range 1–100?

A. 1, 50, 100  
B. 0, 1, 2, 99, 100, 101  
C. 10, 20, 30  
D. 1, 100  

✅ Answer: B

🔹 Explanation:
BVA focuses on boundaries:
- Below min: 0
- Min: 1
- Above min: 2
- Below max: 99
- Max: 100
- Above max: 101
      `
          },

          {
            id: "4.5.3",
            title: "Decision Table",
            content: `
❓ Question:
A discount is applied only when:
- Customer is VIP
AND
- Purchase > $100

How many test cases are needed for full decision table coverage?

A. 2  
B. 3  
C. 4  
D. 5  

✅ Answer: C

🔹 Explanation:
2 conditions → 2² = 4 combinations:

- VIP + >100 → Yes
- VIP + ≤100 → No
- Non-VIP + >100 → No
- Non-VIP + ≤100 → No
      `
          },

          {
            id: "4.5.4",
            title: "State Transition",
            content: `
❓ Question:
Which technique is MOST suitable for testing login lock after 3 failed attempts?

A. Equivalence Partitioning  
B. Boundary Value Analysis  
C. State Transition Testing  
D. Decision Table Testing  

✅ Answer: C

🔹 Explanation:
State transition handles:
- State changes
- Sequences of events

Login lock depends on number of attempts → state-based behavior
      `
          },

          {
            id: "4.5.5",
            title: "Statement vs Decision Coverage",
            content: `
❓ Question:
Which statement is TRUE?

A. Statement coverage ensures all decisions are tested  
B. Decision coverage ensures all statements are tested  
C. Decision coverage is weaker than statement coverage  
D. Statement coverage is stronger than decision coverage  

✅ Answer: B

🔹 Explanation:
- Decision coverage → covers both branches → includes statements
- Statement coverage → may miss branches

So Decision > Statement
      `
          },

          {
            id: "4.5.6",
            title: "Test Technique Type",
            content: `
❓ Question:
Which is a black-box test technique?

A. Statement testing  
B. Decision testing  
C. Equivalence partitioning  
D. Path coverage  

✅ Answer: C

🔹 Explanation:
- Black-box → based on requirements
- White-box → based on code

Equivalence partitioning = black-box
      `
          },

          {
            id: "4.5.7",
            title: "Experience-based Technique",
            content: `
❓ Question:
Which technique relies on tester experience?

A. Boundary Value Analysis  
B. Decision Table  
C. Error Guessing  
D. Statement Testing  

✅ Answer: C

🔹 Explanation:
Error guessing is based on intuition and past experience
      `
          }

        ]
      }

    ]
  },

  {
    id: "5",
    title: "Chapter 5: Test Management",
    sections: [

      {
        id: "5.1",
        title: "Test Planning",
        children: [

          {
            id: "5.1.1",
            title: "Purpose and Content of Test Plan",
            content: `
🔹 Definition:
A test plan is a document that describes the objectives, scope, approach, resources, and schedule of testing activities.

🔹 Explanation:
Test plan answers:
- What to test?
- How to test?
- Who will test?
- When to test?

🔹 Example:
Test plan includes:
- Scope: Login, Payment
- Timeline: 2 weeks
- Resources: 2 testers

🔹 Note:
Test plan is the foundation of testing
          `
          },

          {
            id: "5.1.2",
            title: "Test Strategy and Approach",
            content: `
🔹 Definition:
Test strategy defines the overall approach to testing, while test approach describes how testing will be performed.

🔹 Explanation:
Different strategies:
- Risk-based testing
- Requirements-based testing

🔹 Example:
High-risk module → more test cases

🔹 Note:
Risk-based testing is very important in ISTQB
          `
          }

        ]
      },

      {
        id: "5.2",
        title: "Risk Management",
        children: [

          {
            id: "5.2.1",
            title: "Product Risk",
            content: `
🔹 Definition:
Product risk is the risk of software failing to meet user or business expectations.

🔹 Explanation:
Focus on what could go wrong in the product.

🔹 Example:
Payment failure → financial loss

🔹 Note:
High-risk areas → test more
          `
          },

          {
            id: "5.2.2",
            title: "Project Risk",
            content: `
🔹 Definition:
Project risk is the risk related to project execution.

🔹 Explanation:
Includes:
- Delay
- Lack of resources
- Poor communication

🔹 Example:
Tester leaves project → delay

🔹 Note:
Product risk ≠ Project risk (exam question)
          `
          },

          {
            id: "5.2.3",
            title: "Risk-based Testing",
            content: `
🔹 Definition:
Testing that prioritizes test effort based on risk level.

🔹 Explanation:
Higher risk → more testing  
Lower risk → less testing

🔹 Example:
Payment module → high priority  
UI color → low priority

🔹 Note:
Very common in real projects
          `
          }

        ]
      },

      {
        id: "5.3",
        title: "Test Estimation",
        children: [

          {
            id: "5.3.1",
            title: "Estimation Techniques",
            content: `
🔹 Definition:
Test estimation is the process of predicting the effort required for testing.

🔹 Explanation:
Common techniques:
- Expert judgment
- Historical data
- Metrics

🔹 Example:
Previous project = 2 weeks → similar estimate

🔹 Note:
Estimation is always approximate
          `
          }

        ]
      },

      {
        id: "5.4",
        title: "Test Monitoring and Control",
        children: [

          {
            id: "5.4.1",
            title: "Metrics",
            content: `
🔹 Definition:
Metrics are measurements used to track progress and quality.

🔹 Explanation:
Common metrics:
- Test execution progress
- Defect count
- Pass/fail rate

🔹 Example:
80% test cases passed

🔹 Note:
Metrics support decision making
          `
          },

          {
            id: "5.4.2",
            title: "Control Actions",
            content: `
🔹 Definition:
Control actions are adjustments made when deviations occur.

🔹 Explanation:
If testing is behind schedule:
- Add resources
- Reduce scope

🔹 Example:
Delay → add 1 more tester

🔹 Note:
Monitoring = observe  
Control = act
          `
          }

        ]
      },

      {
        id: "5.5",
        title: "Configuration Management",
        children: [

          {
            id: "5.5.1",
            title: "Configuration Management Concepts",
            content: `
🔹 Definition:
Configuration management ensures consistency of work products throughout the lifecycle.

🔹 Explanation:
Tracks versions of:
- Code
- Documents
- Test cases

🔹 Example:
Version 1.0 → Version 1.1 update

🔹 Note:
Prevents confusion and errors
          `
          }

        ]
      },

      {
        id: "5.6",
        title: "Defect Management",
        children: [

          {
            id: "5.6.1",
            title: "Defect Lifecycle",
            content: `
🔹 Definition:
Defect lifecycle describes the stages a defect goes through.

🔹 Explanation:
Typical stages:
- New
- Assigned
- Fixed
- Retested
- Closed

🔹 Example:
Tester logs bug → developer fixes → tester retests

🔹 Note:
Must understand lifecycle flow
          `
          },

          {
            id: "5.6.2",
            title: "Defect Report",
            content: `
🔹 Definition:
A defect report documents details of a defect.

🔹 Explanation:
Includes:
- Description
- Steps to reproduce
- Expected vs actual result

🔹 Example:
Login fails with valid input

🔹 Note:
Clear report = faster fix
          `
          }

        ]
      }

    ]
  },

  {
    id: "6",
    title: "Chapter 6: Test Tools",
    sections: [

      {
        id: "6.1",
        title: "Tool Support for Testing",
        children: [

          {
            id: "6.1.1",
            title: "Test Tool Classification",
            content: `
🔹 Definition:
Test tools are software applications that support one or more testing activities.

🔹 Explanation:
Tools can support different phases of testing, such as:
- Test management
- Test design
- Test execution
- Defect tracking

🔹 Example:
- Test management tool → manage test cases
- Automation tool → run test scripts

🔹 Note:
Tools SUPPORT testing, not replace testers
          `
          },

          {
            id: "6.1.2",
            title: "Types of Test Tools",
            content: `
🔹 Definition:
Test tools are categorized based on their functionality.

🔹 Explanation:
Common types:

1. Test Management Tools  
→ Manage test cases, plans, execution

2. Static Testing Tools  
→ Code review, static analysis

3. Test Design Tools  
→ Help create test cases

4. Test Execution Tools  
→ Automation tools

5. Performance Testing Tools  
→ Measure system performance

6. Defect Management Tools  
→ Track bugs

🔹 Example:
- Jira → defect tracking
- Selenium → automation testing

🔹 Note:
Need to recognize tool type in exam
          `
          }

        ]
      },

      {
        id: "6.2",
        title: "Benefits and Risks of Test Automation",
        children: [

          {
            id: "6.2.1",
            title: "Benefits of Test Automation",
            content: `
🔹 Definition:
Test automation uses tools to execute tests automatically.

🔹 Explanation:
Benefits:
- Faster execution
- Repeatable tests
- Increased coverage
- Reduced manual effort

🔹 Example:
Run regression test overnight automatically

🔹 Note:
Good for repetitive testing
          `
          },

          {
            id: "6.2.2",
            title: "Risks of Test Automation",
            content: `
🔹 Definition:
Automation also introduces risks and challenges.

🔹 Explanation:
Risks:
- High initial cost
- Maintenance effort
- Wrong tool selection
- Over-reliance on automation

🔹 Example:
UI changes → automation scripts break

🔹 Note:
Automation is not always the best solution
          `
          }

        ]
      },

      {
        id: "6.3",
        title: "Effective Use of Tools",
        children: [

          {
            id: "6.3.1",
            title: "Tool Selection",
            content: `
🔹 Definition:
Selecting the right tool based on project needs.

🔹 Explanation:
Factors to consider:
- Project requirements
- Budget
- Team skills
- Tool compatibility

🔹 Example:
Small project → simple tools  
Large system → advanced automation

🔹 Note:
Wrong tool = wasted effort
          `
          },

          {
            id: "6.3.2",
            title: "Tool Implementation",
            content: `
🔹 Definition:
The process of introducing and integrating tools into the project.

🔹 Explanation:
Steps:
- Evaluate tools
- Pilot project
- Training team
- Deploy

🔹 Example:
Introduce automation tool → train team → apply gradually

🔹 Note:
Start small, then expand
          `
          },

          {
            id: "6.3.3",
            title: "Success Factors for Tools",
            content: `
🔹 Definition:
Factors that determine successful tool usage.

🔹 Explanation:
Key factors:
- Management support
- Proper training
- Clear objectives
- Gradual adoption

🔹 Example:
Team trained well → tool used effectively

🔹 Note:
People and process are more important than tools
          `
          }

        ]
      }

    ]
  }
];

export default chapters;
