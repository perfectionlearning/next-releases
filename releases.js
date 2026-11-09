// Next Releases - release data.
// Newest release first. To add a release, copy the R26.2 block, put it on top and edit it.
// status: "upcoming" or "released". url: null until the article is live.
// summary: 1-2 sentences shown at the top - the short version of what's changing.
// screenshots: groups, one per change. Put images in img/<release id>/ and list them under a group's shots (file, label).

window.RELEASES = [
  {
    id: "r26-4",
    label: "R26.4",
    status: "released",
    dates: "Released 11/9/2026",
    note: "Live on prod (released overnight 11/8-11/9). Didn't make this release: the eBook Immersive Reader and Text to Speech toolbar change (PN-2396, still in testing) and the Assessment Builder usability fixes (PN-2392). The AP U.S. History one-prompt LEQ fix is live, but the updated practice exam items aren't on prod yet, so teachers won't see the change until they're moved (PN-2406). Moved to R26.5: DA/SA license screens cleanup, PLC Admin Impersonate User (with the DA/SA Stop impersonation fix), and the Assessment Builder question type filters and Wiley answer order.",
    summary: "Fixes for constructed responses that didn't save after pasting, downloaded test PDFs, part question numbering and Student Answers Time Spent, plus one password rule across Next. Reports and the Teacher Dashboard show an error with Retry instead of spinning forever, and AP English practice exam essays get Grading Assistant feedback instead of staying Pending (except AP Lang question 1 - see known issues).",
    updated: "11/9/2026",
    contact: "Katrina Keay",

    changes: [
      { area: "Students", title: "Constructed responses save after paste",
        detail: "Pasting an answer, deleting it and pasting again now saves (reported by Coppell ISD). There's no paste lock and no teacher setting.",
        tickets: ["PN-2434", "PN-2363"] },
      { area: "Assessments", title: "Downloaded test PDFs",
        detail: "Download to Print keeps tests in portrait. Tables, dropdown options, fractions, answer boxes and multiple-choice checkboxes print cleanly.",
        tickets: ["PN-1720", "PN-2115", "PN-2117", "PN-2119", "PN-2132"] },
      { area: "Grading Assistant", title: "AP English practice exams get feedback",
        detail: "AP English Language and AP English Literature practice exam essays (Assessment Library) now get Grading Assistant feedback - likely score range, summary and rubric feedback - instead of staying Pending. Checked on prod 11/9: AP Lit and AP Lang questions 2 and 3 get feedback, but AP Lang question 1 (synthesis) still stays Pending (see known issues). Essays submitted before the release stay Pending.",
        tickets: ["PN-2267"] },
      { area: "Reports", title: "Reports show Retry instead of spinning",
        detail: "If a report doesn't load, the Proficiency Report, Gradebook, Assignment report and Teacher Dashboard stop the spinner and show \"We couldn't load this report. Please try again.\" (\"We couldn't load your assignments\" on the Dashboard) with a Retry button. Screen readers announce the message. A class with no data still shows No Data. Reported at Okeechobee.",
        tickets: ["PN-2347"] },
      { area: "Sign-in", title: "One password rule across Next",
        detail: "New and changed passwords need at least 6 characters with an uppercase letter, a lowercase letter and a number. Special characters are allowed, not required. Existing passwords keep working - nobody has to change theirs.",
        tickets: ["PN-2191"] },
      { area: "Fixes", title: "Fixes",
        detail: "Part questions are numbered correctly in Display Answers, Grade Assignment, View Assignment, View Student Work and Print Assessment (they repeated the previous question's number). A School Admin signing in through Clever no longer gets stuck on a loading spinner when switching teachers or classes (reported by IDEA Public Schools). Student Answers shows Time Spent again. Passage line numbers indent correctly in the Insight ELA passage that was reported, answer key passages have a space after the paragraph number, and the Gray Owl passage font is normal size. A content fix for item 1022856.",
        tickets: ["PN-2470", "PN-2483", "PN-2408", "PN-2378", "PN-2377", "PN-2375", "PN-1450"] }
    ],

    articles: [
      { title: "How do I retrieve my password?", note: "Being updated for the new password rule", url: null }
    ],

    screenshots: [],

    faq: [
      { group: "Passwords", items: [
        { q: "\"Do I have to change my password?\"",
          a: "No. Existing passwords keep working. The new rule only applies when a password is created or changed: at least 6 characters with an uppercase letter, a lowercase letter and a number." },
        { q: "\"My new password won't save.\"",
          a: "Check it has at least 6 characters with an uppercase letter, a lowercase letter and a number. Special characters are fine but not required." }
      ]},
      { group: "Students", items: [
        { q: "\"My student pasted an answer and it didn't save.\"",
          a: "Fixed in R26.4 - pasting, deleting and pasting again now saves. Answers lost before the release don't come back." }
      ]},
      { group: "Reports", items: [
        { q: "\"My report says 'We couldn't load this report.'\"",
          a: "Click Retry. If it keeps happening, reload the page or try again in a few minutes, and contact support if it doesn't clear." }
      ]},
      { group: "AP English Grading Assistant", items: [
        { q: "\"My AP Lang or AP Lit practice exam essays still say Pending.\"",
          a: "Essays submitted before R26.4 won't pick up feedback on their own. Essays submitted after the release get feedback in about 10 minutes - except AP Lang question 1 (synthesis), which is still Pending while we look into it." }
      ]}
    ],

    knownIssues: [
      { title: "View Assessment: some questions show out of order.",
        detail: "Compared with the Answer Key, View Assessment lists some questions out of order (seen on Insight ELA Grade 3 Practice Test 1 with Constructed Response). Already on prod - a fix is logged (PN-2503)." },
      { title: "AP English Grading Assistant: AP Lang practice exam question 1 stays Pending.",
        detail: "Seen on prod 11/9 for essays submitted after the release: AP Lang question 1 (synthesis) stays Pending, while questions 2 and 3, AP Lit and AP History essays get feedback. Being looked into (PN-2267)." },
      { title: "AP English practice exams: teacher views show the directions twice, and essay numbers have no space after them.",
        detail: "In Grade Assignment, Display Answers, View Assignment and View Students Work. The essays are now numbered 1, 2, 3, but read \"1.Write an essay...\". Students see the directions once. Fixes logged (PN-2492, PN-2493)." },
      { title: "AP Literature Practice Exam I: poem line numbers run into the text.",
        detail: "In question 1 (the Santayana poem), lines 5 and 10 read \"5Within...\" and \"10Haunt...\" and aren't indented like the other lines. Students and teachers both see it. A fix is being requested." },
      { title: "AP English Grading Assistant: some summaries are missing a word.",
        detail: "For example \"needed to, resulting in...\". The score range and rubric feedback aren't affected. A fix is logged (PN-2486)." },
      { title: "Downloaded test PDFs: stacked fractions in a bulleted list can overlap.",
        detail: "Seen on Insight Math Grade 3 Practice Test 1, item 22. A fix is logged (PN-2482)." },
      { title: "Stop impersonation logs you out (District and School Admins).",
        detail: "Carried from R26.2. Sign back in. The fix moved to R26.5 (PN-2072)." },
      { title: "Assessment Builder: Wiley answer choices list the correct answer first.",
        detail: "In Step 2 (Select Questions), Wiley items such as Algebra & Trigonometry 5E show the correct choice as A and the correct dropdown option first. Students see their own shuffled order on new assignments. The fix moved to R26.5 (PN-2429)." },
      { title: "AP U.S. History Assessment Library: broken logo for students.",
        detail: "Carried from R26.3. Cosmetic only - a fix is requested (PN-2462)." }
    ]
  },
  {
    id: "r26-3",
    label: "R26.3",
    status: "released",
    dates: "Released 11/1/2026",
    note: "Live on prod. Support Center articles below are published. Didn't make this release (still in testing, release not set): AP U.S. History single-prompt LEQ fix, downloaded test PDF fix, constructed-response paste fix, Manage Licenses cleanup and Impersonate User. Screen reader (JAWS) fixes and the updated Assessment Builder are planned for R26.4.",
    summary: "Create Assignment shows the same options from any resource, with tooltips and a Learn more link. The login page says who Sign in with Google is for, and Forgot Password moved under the Password field. Also: Select Text shading on the Cambium-style test player and a Notebook fix. The CyFair sign-in code is out, but the switch hasn't happened yet.",
    updated: "11/2/2026",
    contact: "Katrina Keay",

    changes: [
      { area: "Assignments", title: "Create Assignment updates",
        detail: "Creating an assignment from an Interactive Edition or the Assessment Library shows the same options, including Weekdays, randomized order and Show feedback after first attempt (grayed out when the content has no feedback). Each option has a short tooltip, and a Learn more link opens the Creating an Assignment article. Allow students to review answers can be set to a number of days after the due date (after the end date when a Grace Period is on). With Weekdays selected, the start and due dates must be weekdays and the due time must be later than the start time. Grade 9 Benchmark sub-lessons now list in order.",
        tickets: ["PN-2061"] },
      { area: "Sign-in", title: "Login page - Sign in with Google",
        detail: "A line under Sign in with Google says it's only for schools that connected Google Classroom to Perfection Next, using a school Google account (not a personal Gmail). Forgot Password moved under the Password field.",
        tickets: ["PN-2446"] },
      { area: "Students", title: "Cambium-style test player - Select Text",
        detail: "Select Text choices in a passage have no gray shading until a student hovers over or selects them, like the real test.",
        tickets: ["PN-2334"] },
      { area: "Sign-in", title: "RapidIdentity sign-in for Cypress-Fairbanks ISD",
        detail: "Code out, switch pending - nothing changes for CyFair users yet. Once the switch is scheduled with the district, users will sign in through RapidIdentity or Schoology, with classes, rosters and grades from Schoology.",
        tickets: ["PN-2380"] },
      { area: "Fixes", title: "Fixes",
        detail: "Notebook entries stay put when a teacher switches Reading Selection tabs in Grade Assignment. Admin Add Students, Add Teachers and Add School Administrators forms no longer suggest saved usernames.",
        tickets: ["PN-2346", "PN-2430"] }
    ],

    articles: [
      { title: "Creating an Assignment in Perfection Next", note: "Updated - matching options, tooltips, Weekdays rules, review-answer timing, new screenshots", url: "https://support.perfectionlearning.com/en/articles/16978816-creating-an-assignment-in-perfection-next" },
      { title: "Signing in with Google (Google Classroom)", note: "Updated - new login page and sign-in error section", url: "https://support.perfectionlearning.com/en/articles/17666490-signing-in-with-google-google-classroom" },
      { title: "How do I retrieve my password?", note: "Updated - Forgot Password moved under the Password field", url: "https://support.perfectionlearning.com/en/articles/9614426-how-do-i-retrieve-my-password" },
      { title: "Using Fluency Lab", note: "Updated - Record in gradebook as removed, review-answer options", url: "https://support.perfectionlearning.com/en/articles/16223368-using-fluency-lab" },
      { title: "Assignment and Grade Passback with Canvas", note: "Updated - Create Assignment screenshot, Save button", url: "https://support.perfectionlearning.com/en/articles/11871207-assignment-and-grade-passback-with-canvas" },
      { title: "Using Perfection Next with Schoology", note: "Updated - Save button", url: "https://support.perfectionlearning.com/en/articles/17666586-using-perfection-next-with-schoology" },
      { title: "Wiley Assessment Builder: Frequently Asked Questions", note: "New - live 10/27", url: "https://support.perfectionlearning.com/en/articles/17720695-wiley-assessment-builder-frequently-asked-questions" }
    ],

    screenshots: [],

    faq: [
      { group: "Create Assignment", items: [
        { q: "\"I can't save the assignment with Weekdays checked.\"",
          a: "With Weekdays selected, the start and due dates must be weekdays and the due time must be later than the start time. Students can open the assignment on weekdays between those two times." },
        { q: "\"When will my students see their answers?\"",
          a: "It's set under Allow students to review answers. The default waits until everyone's work is graded. With a Grace Period on, Number of days counts from the End Date, not the due date." },
        { q: "\"Does random order mix up AP practice exam sections?\"",
          a: "No. Questions shuffle only within each sub-lesson, so the multiple choice, short answer and free response sections keep their order. Multi-part questions stay together." }
      ]},
      { group: "Sign-in", items: [
        { q: "\"Where did Forgot Password go?\"",
          a: "It's under the Password field now. It resets a Next password, not a Google password." },
        { q: "\"I clicked Sign in with Google and got 'There was an error signing you in.'\"",
          a: "Sign in with Google only works with a school Google Classroom account, at a school that connected Google Classroom to Next. A personal Gmail gets this error. Sign in with the Next username and password instead." }
      ]},
      { group: "Cambium-style test player", items: [
        { q: "\"I can't tell which text I can select.\"",
          a: "Select Text choices aren't shaded until the student hovers over them or selects one, like the real test. Have them hover over the text." }
      ]},
      { group: "Cypress-Fairbanks ISD sign-in", items: [
        { q: "\"Did CyFair's sign-in change?\"",
          a: "Not yet. The code is out, but the switch from ClassLink hasn't been made - CyFair users sign in the same way as before until it's scheduled with the district." }
      ]}
    ],

    knownIssues: [
      { title: "AP U.S. History: one-prompt Long Essay Questions still show Selected Prompt.",
        detail: "On practice exams, an LEQ with only one prompt still shows the Selected Prompt dropdown, and a student's View Results may not show the LEQ prompt. A fix is in testing (PN-2406)." },
      { title: "Stop impersonation logs you out (District and School Admins).",
        detail: "Carried from R26.2. Sign back in. A fix is in testing (PN-2072)." },
      { title: "Assessment Builder: Wiley answer choices list the correct answer first.",
        detail: "In Step 2 (Select Questions), Wiley items such as Algebra & Trigonometry 5E show the correct choice as A and the correct dropdown option first - that's the order Wiley sends. Students see their own shuffled order on new assignments. A fix is planned for R26.4 (PN-2429)." },
      { title: "AP U.S. History Assessment Library: broken logo for students.",
        detail: "Above the assignment title, students see a broken image icon and the text \"AP United States History Assessment Library.\" Cosmetic only - a fix is requested (PN-2462)." }
    ]
  },
  {
    id: "r26-2",
    label: "R26.2",
    status: "released",
    dates: "Released 10/25/2026",
    note: "Live on prod. Support Center articles below are published.",
    summary: "Admins with classes now land on the Class Dashboard and can create classes. Schools get two new settings - Teachers Can Add Students and Teachers Can Self-Register. Google Classroom schools can sign in with Google, and rostered account details are read-only. Test-player Text to Speech is now set per student (off by default), and Read sections end with Mark as Complete.",
    updated: "10/27/2026",
    contact: "Katrina Keay",

    changes: [
      { area: "Admins", title: "District and School Admins with classes",
        detail: "Admins with classes land on the Class Dashboard at login and can create and edit classes in their school or district. DAs get a school dropdown on Instructional Materials.",
        tickets: ["PN-1856", "PN-1778"] },
      { area: "Admins", title: "New Manage Schools settings",
        detail: "DAs and SAs can set Teachers Can Add Students and Teachers Can Self-Register for each school. Both default to On.",
        tickets: ["PN-1086", "PN-1921"] },
      { area: "Sign-in", title: "Sign in with Google",
        detail: "Teachers and students in Google Classroom schools can sign in with their Google account.",
        tickets: ["PN-2107"] },
      { area: "Sign-in", title: "Rostered accounts are read-only",
        detail: "Names, emails and class rosters that come from a roster sync can't be edited in Next.",
        tickets: ["PN-2277"] },
      { area: "Students", title: "Student accessibility options",
        detail: "The Text to Speech checkbox on Add/Edit Class is gone. Test-player Text to Speech is now set per student and is off by default.",
        tickets: ["PN-872"] },
      { area: "Assignments", title: "Read sections - Mark as Complete",
        detail: "Sections with nothing to answer (most Read sections and some unit openers) end with a Mark as Complete button. No pop-up. Sections with a question or response box still end with Submit.",
        tickets: ["PN-2379", "PN-2258"] },
      { area: "Fixes", title: "Fixes",
        detail: "Teachers can view student work in Read sections again. Show Answers keeps line breaks. The view mode stays selected between sub-lessons. Answer choices on randomized Algebra & Trigonometry 5E questions now shuffle for each student (new assignments only). Admin Add forms no longer fill in the admin's own login. Teachers in more than one school - a new class now goes to the school they switched to. Clicking an assignment title opens View Assignment - Grade Assignment is in the Actions menu. Multi-part questions with randomized values show the same numbers in the question as in its parts. Assignments no longer stay in To Do after a student submits every section. Fixed 10/26 after the release: My Progress no longer shows a completed Read section (or other no-point assignment) as Needs Grading.",
        tickets: ["PN-2258", "PN-2352", "PN-2348", "PN-2386", "PN-2308", "PN-2417", "PN-2405", "PN-2398", "PN-2427", "PN-2438"] }
    ],

    articles: [
      { title: "Getting Started for District Administrators", note: "Updated - Class Dashboard, classes, Manage Schools settings", url: "https://support.perfectionlearning.com/en/articles/16805856-getting-started-for-district-administrators" },
      { title: "Getting Started Guide for School Administrators", note: "Updated - classes, Manage Schools settings", url: "https://support.perfectionlearning.com/en/articles/16603361-getting-started-guide-for-school-administrators" },
      { title: "Signing in with Google (Google Classroom)", note: "New - signing in, no Next password, what can't be changed", url: "https://support.perfectionlearning.com/en/articles/17666490-signing-in-with-google-google-classroom" },
      { title: "Setting a Student's Immersive Reader Accessibility Options", note: "Updated - per-student Text to Speech", url: "https://support.perfectionlearning.com/en/articles/16992454-setting-a-student-s-immersive-reader-accessibility-options" },
      { title: "Using the Interactive Edition", note: "Updated - Mark as Complete on Read sections, Teachers Can Add Students off", url: "https://support.perfectionlearning.com/en/articles/9921749-using-the-interactive-edition" },
      { title: "Creating an Assignment in Perfection Next", note: "Updated - Mark as Complete on Read sections", url: "https://support.perfectionlearning.com/en/articles/16978816-creating-an-assignment-in-perfection-next" }
    ],

    screenshots: [
      { area: "Admins", title: "District and School Admins with classes",
        caption: "Admins with classes land on the Class Dashboard and can add classes. DAs pick a school on the dashboard, Add Class and Instructional Material.",
        articles: [{ label: "DA guide", url: "https://support.perfectionlearning.com/en/articles/16805856-getting-started-for-district-administrators" }, { label: "SA guide", url: "https://support.perfectionlearning.com/en/articles/16603361-getting-started-guide-for-school-administrators" }],
        shots: [
          { file: "img/r26-2/da-class-dashboard.png", label: "Class Dashboard - DA" },
          { file: "img/r26-2/sa-class-dashboard.png", label: "Class Dashboard - SA" },
          { file: "img/r26-2/da-add-class.png", label: "Add Class - DA" },
          { file: "img/r26-2/sa-add-class.png", label: "Add Class - SA" },
          { file: "img/r26-2/da-products-school-menu.png", label: "Instructional Material - DA school menu" }
        ] },
      { area: "Admins", title: "New Manage Schools settings",
        caption: "Teachers Can Add Students and Teachers Can Self-Register for each school. Both default to On.",
        articles: [{ label: "DA guide", url: "https://support.perfectionlearning.com/en/articles/16805856-getting-started-for-district-administrators" }, { label: "SA guide", url: "https://support.perfectionlearning.com/en/articles/16603361-getting-started-guide-for-school-administrators" }],
        shots: [
          { file: "img/r26-2/da-manage-schools.png", label: "Manage Schools - DA" },
          { file: "img/r26-2/sa-manage-schools.png", label: "Manage Schools - SA" }
        ] },
      { area: "Students", title: "Student accessibility options",
        caption: "Test-player Text to Speech is set per student under Assessment Player Options and is off by default.",
        articles: [{ label: "Accessibility Options", url: "https://support.perfectionlearning.com/en/articles/16992454-setting-a-student-s-immersive-reader-accessibility-options" }],
        shots: [
          { file: "img/r26-2/ir-03-accessibility-options-top.png", label: "Accessibility Options tab - teacher" },
          { file: "img/r26-2/ir-04-assessment-player-options.png", label: "Assessment Player Options" },
          { file: "img/r26-2/da-accessibility-options.png", label: "Accessibility Options - DA/SA" }
        ] },
      { area: "Assignments", title: "Read sections - Mark as Complete",
        caption: "Sections with nothing to answer end with Mark as Complete. No pop-up - the bar then shows the date and \"You marked this section complete.\"",
        articles: [{ label: "Using the Interactive Edition", url: "https://support.perfectionlearning.com/en/articles/9921749-using-the-interactive-edition" }],
        shots: [
          { file: "img/r26-2/ie-mark-complete-before.png", label: "Before" },
          { file: "img/r26-2/ie-mark-complete-after.png", label: "After" }
        ] }
    ],

    faq: [
      { group: "Sign in with Google and rostered accounts", items: [
        { q: "\"I clicked Sign in with Google and got 'There was an error signing you in.'\"",
          a: "Sign in with Google only works at Google Classroom schools connected to Next, with the school Google account. A personal Gmail, or a school that isn't connected, lands on this Edlink error page (400). Have them sign in with their Next username and password instead. Forgot password on the login page resets the Next password, not Google's." },
        { q: "\"I sign in with Google (or through Clever or Edlink) and can't change my password.\"",
          a: "They don't have a Next password - it's managed by their school's sign-in. The Password tab says \"Your password is managed by your school's sign-in.\" Perfection Learning can't reset it - send them to their district tech team." },
        { q: "\"I can't change my name or email.\" / \"I can't edit this student.\"",
          a: "Rostered accounts come from the school's roster sync, so changes are made in their SIS or roster system, not Next." },
        { q: "\"Do grades go back to Google Classroom?\"",
          a: "Grade passback to Google Classroom isn't part of this release." }
      ]},
      { group: "Teacher access settings (Manage > Schools)", items: [
        { q: "\"Add Students is grayed out.\"",
          a: "The school has Teachers Can Add Students turned Off, so the admin manages student accounts. The tooltip says \"Your school administrator manages student accounts.\" An admin can turn it On in Manage > Schools. Teachers can still reset student passwords, manage classes and set accessibility options." },
        { q: "\"The class code is gone.\" / \"Students can't join with a code.\"",
          a: "Same setting - class codes are off when Teachers Can Add Students is Off." },
        { q: "\"My access code doesn't work.\" / \"I can't register as a teacher.\"",
          a: "The school has Teachers Can Self-Register turned Off. The admin can add the teacher or turn it On. The admin's Invite Teachers window says registration is off and points to both options." },
        { q: "\"I can't change these settings.\"",
          a: "Settings are grayed out for rostered schools (\"Students come from your roster sync.\")." }
      ]},
      { group: "Admins", items: [
        { q: "\"My dashboard looks different.\"",
          a: "Admins with classes now land on the Class Dashboard instead of the license dashboard." },
        { q: "\"Clever staff can't get in.\"",
          a: "Staff synced from Clever come in inactive as Staff. A DA, an SA in the same school, or Perfection Learning can change them to Teacher or SA." }
      ]},
      { group: "Student accessibility", items: [
        { q: "\"My student lost Text to Speech on tests.\"",
          a: "The class checkbox is gone, and the old class setting didn't carry over. Turn it on per student: Manage > Students > student > Accessibility Options > Assessment Player Options > Text to Speech." },
        { q: "\"The Magnifier option is gone.\" / \"The zoom buttons disappeared.\"",
          a: "Magnifier was removed. Font Size now controls the test player's zoom - when it's off, the zoom buttons are hidden." }
      ]},
      { group: "Read sections", items: [
        { q: "\"Where's the 'I have completed reading' checkbox?\"",
          a: "Replaced by Mark as Complete. No pop-up - the bar shows the date and \"You marked this section complete.\"" },
        { q: "\"Why does Read show 0 points or Not Graded?\"",
          a: "Read sections aren't scored. The gradebook shows a check with 0 points." },
        { q: "\"Why does this section say Submit instead of Mark as Complete?\"",
          a: "Mark as Complete only shows on sections with nothing to answer. If a section has a question or response box (for example, the Connections Reading Grade 6 Unit 1 Opener asks students to write a definition of friend), it keeps Submit. Submit stays grayed out until the student answers." }
      ]},
      { group: "Assignments", items: [
        { q: "\"Clicking my assignment doesn't open grading anymore.\"",
          a: "Clicking the assignment title now opens View Assignment. To grade, open the Actions menu and select Grade Assignment." }
      ]}
    ],

    knownIssues: [
      { title: "Stop impersonation logs you out (District and School Admins).",
        detail: "Sign back in. A fix is in testing (PN-2072)." },
      { title: "Read assignments that were already stuck stay stuck.",
        detail: "This release fixes new completions only. Cleanup of older stuck assignments comes later." },
      { title: "Item Analysis answer-choice counts on randomized questions.",
        detail: "Because answer choices now shuffle per student, the per-choice counts for randomized questions can be misleading. Use Correct / Incorrect instead. A fix is in a separate ticket." }
    ]
  }
];
