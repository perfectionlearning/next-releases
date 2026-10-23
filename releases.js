// Next Releases - release data.
// Newest release first. To add a release, copy the R26.2 block, put it on top and edit it.
// status: "upcoming" or "released". url: null until the article is live.

window.RELEASES = [
  {
    id: "r26-2",
    label: "R26.2",
    status: "upcoming",
    dates: "Targeted for 10/24 - 10/25",
    note: "Not on prod yet - goes out if testing holds.",
    updated: "10/23/2026",
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
        detail: "Sections with nothing to answer end with a Mark as Complete button. No pop-up.",
        tickets: ["PN-2379", "PN-2258"] },
      { area: "Fixes", title: "Fixes",
        detail: "Teachers can view student work in Read sections again. Show Answers keeps line breaks. The view mode stays selected between sub-lessons. Answer choices on randomized Algebra & Trigonometry 5E questions now shuffle for each student (new assignments only). Admin Add forms no longer fill in the admin's own login. Teachers in more than one school - a new class now goes to the school they switched to.",
        tickets: ["PN-2258", "PN-2352", "PN-2348", "PN-2386", "PN-2308", "PN-2417"] }
    ],

    articles: [
      { title: "District Admin Setup Guide", note: "Updated - Class Dashboard, classes, Manage Schools settings", url: null },
      { title: "School Admin Setup Guide", note: "Updated - classes, Manage Schools settings", url: null },
      { title: "Signing in with Google (Google Classroom)", note: "New - signing in, no Next password, what can't be changed", url: null },
      { title: "Setting a Student's Immersive Reader Accessibility Options", note: "Updated - per-student Text to Speech", url: null },
      { title: "Creating an Assignment / Using the Interactive Edition", note: "Updated - Mark as Complete on Read sections", url: null }
    ],

    faq: [
      { group: "Sign in with Google and rostered accounts", items: [
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
          a: "Read sections aren't scored. The gradebook shows a check with 0 points." }
      ]}
    ],

    knownIssues: [
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
