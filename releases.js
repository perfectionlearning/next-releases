// Next Releases - release data.
// Newest release first. To add a release, copy the R26.2 block, put it on top and edit it.
// status: "upcoming" or "released". url: null until the article is live.
// summary: 1-2 sentences shown at the top - the short version of what's changing.
// screenshots: groups, one per change. Put images in img/<release id>/ and list them under a group's shots (file, label).

window.RELEASES = [
  {
    id: "r26-3",
    label: "R26.3",
    status: "upcoming",
    dates: "Targeted for the weekend of 10/31 - 11/1 (to be confirmed)",
    note: "Not on prod yet - based on Jesse's 10/26 list. Items can still move.",
    summary: "Planned: an updated Assessment Builder (if testing finishes this week), screen reader fixes in Connections eBooks, a cleaner Manage Licenses view for admins, RapidIdentity sign-in for Cypress-Fairbanks ISD, and a few fixes.",
    updated: "10/26/2026",
    contact: "Katrina Keay",

    changes: [
      { area: "Teachers", title: "Assessment Builder v2",
        detail: "Updated Assessment Builder, including a question type filter and usability fixes from review. Goes out only if testing finishes this week.",
        tickets: ["PN-2230", "PN-2392"] },
      { area: "Students", title: "Screen reader (JAWS) fixes in Connections eBooks",
        detail: "Keyboard and screen reader access to Immersive Reader, Text to Speech, the table of contents and page links. Immersive Reader and Text to Speech get their own buttons in the eBook toolbar, so all users will see them.",
        tickets: ["PN-2396"] },
      { area: "Admins", title: "Manage Licenses cleanup",
        detail: "District and school license views show the product name from the order, add a Grade/Level column, combine duplicate license rows into one total, and label integration licenses.",
        tickets: ["PN-2058"] },
      { area: "Sign-in", title: "RapidIdentity sign-in for Cypress-Fairbanks ISD",
        detail: "One district: users can sign in through RapidIdentity, while classes, rosters and grades stay with Schoology.",
        tickets: ["PN-2380"] },
      { area: "Internal", title: "Impersonate User for Perfection Learning staff",
        detail: "PLC Admin (CE) can impersonate any user on www.perfectionnext.com, with a bar showing who they're viewing as. Not customer-facing.",
        tickets: ["PN-2072"] },
      { area: "Fixes", title: "Fixes",
        detail: "Wiley Algebra & Trigonometry 5E questions no longer show A as the correct answer on most items in the Assessment Builder. My Progress no longer shows a completed Read section as Needs Grading. Admin Add forms no longer suggest saved usernames.",
        tickets: ["PN-2429", "PN-2438", "PN-2430"] }
    ],

    articles: [
      { title: "How to Use the Assessment Builder", note: "New - in progress", url: null },
      { title: "Wiley Assessment Builder: Frequently Asked Questions", note: "New - drafted, waiting on PN-2390", url: null },
      { title: "Getting Started for District / School Administrators", note: "Update Licenses section if the license screens change", url: null },
      { title: "Using eBooks on Perfection Next", note: "Update if the toolbar buttons ship", url: null }
    ],

    screenshots: [],

    faq: [],

    knownIssues: []
  },
  {
    id: "r26-2",
    label: "R26.2",
    status: "released",
    dates: "Released 10/25/2026",
    note: "Live on prod. Support Center articles below are published.",
    summary: "Admins with classes now land on the Class Dashboard and can create classes. Schools get two new settings - Teachers Can Add Students and Teachers Can Self-Register. Google Classroom schools can sign in with Google, and rostered account details are read-only. Test-player Text to Speech is now set per student (off by default), and Read sections end with Mark as Complete.",
    updated: "10/26/2026",
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
        detail: "Teachers can view student work in Read sections again. Show Answers keeps line breaks. The view mode stays selected between sub-lessons. Answer choices on randomized Algebra & Trigonometry 5E questions now shuffle for each student (new assignments only). Admin Add forms no longer fill in the admin's own login. Teachers in more than one school - a new class now goes to the school they switched to. Clicking an assignment title opens View Assignment - Grade Assignment is in the Actions menu. Multi-part questions with randomized values show the same numbers in the question as in its parts. Assignments no longer stay in To Do after a student submits every section.",
        tickets: ["PN-2258", "PN-2352", "PN-2348", "PN-2386", "PN-2308", "PN-2417", "PN-2405", "PN-2398", "PN-2427"] }
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
      { title: "The login page doesn't say Sign in with Google is only for Google Classroom schools.",
        detail: "Users with a personal Gmail or at a school that isn't connected may try it and get an error page. Forgot password sits under the Google button but resets the Next password. A login-page fix is in progress." },
      { title: "Stop impersonation logs you out (District and School Admins).",
        detail: "Sign back in. A fix is coming in a later release." },
      { title: "My Progress shows a completed Read section as Needs Grading.",
        detail: "Read sections aren't graded - the student is done once they select Mark as Complete. A follow-up is being reviewed." },
      { title: "Read assignments that were already stuck stay stuck.",
        detail: "This release fixes new completions only. Cleanup of older stuck assignments comes later." },
      { title: "Item Analysis answer-choice counts on randomized questions.",
        detail: "Because answer choices now shuffle per student, the per-choice counts for randomized questions can be misleading. Use Correct / Incorrect instead. A fix is in a separate ticket." }
    ]
  }
];
