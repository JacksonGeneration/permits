import{b as H}from"./chunk-2FMSJ3O3.js";import{c as ae,e as se}from"./chunk-TYXDUCQO.js";import{Fa as D,Fb as S,Gb as oe,Ja as u,Oa as U,Pa as p,Ra as A,S as z,Sa as f,Ta as M,Va as x,Vb as ie,Wa as P,Xa as h,Ya as s,Za as q,ab as w,cb as ne,db as a,ja as V,jb as y,ka as te,kb as m,lb as k,mb as B,ta as v,va as i,vb as b,yb as $}from"./chunk-KIMXBKEP.js";import{a as F,b as ee}from"./chunk-4CLCTAJ7.js";var K=[{id:"control-device",title:"Set up the control device",summary:"Install the permit server on the one PC that holds the record: with the hub (one button in the desktop app) or by hand. Firewall, disks, and how to check it."},{id:"backups",title:"Backups",summary:"Where the backups go, how to tell they are working, the second disk, and copying one away by hand. Off-box copies are not built yet."},{id:"replace-control-device",title:"Replace the control device",summary:"From a backup, so stations stay paired; or brand new with no backup, so each station joins the new one."},{id:"station",title:"Set up a station",summary:"Install Permit Station with the hub (desktop app) or without it (USB installer), then approve the new PC on the console. Kiosk, core station, revoking."},{id:"people",title:"People",summary:"Who can do what. With the hub: where people and roles come from. Without it: local people, suspending, extending an orientation, temporary roles, cards, PINs."},{id:"using",title:"Using the permit system",summary:"Sign in, orientation, writing a request, intake, review and approval, sign-on and sign-off, stop work, revise, renew, close, lists, standards and flows, phones, notices."},{id:"library",title:"The Library",summary:"Places, hazards and their mitigations, steps, tools, trades and equipment states: edited in a draft, published as one version."}],Ct=K.map(e=>e.id);function Ce(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"section"}var xe=/^#\/guide\/([a-z0-9-]+)(?:#([a-z0-9-]+))?$/,Pe=/^#([a-z0-9-]+)$/,Te=/^https?:\/\/[^\s<>"']+$/i;function Ae(e){let n=xe.exec(e);if(n)return{guide:{page:n[1],anchor:n[2]??null}};let t=Pe.exec(e);return t?{guide:{page:null,anchor:t[1]}}:Te.test(e)?{url:e}:null}function Y(e){let n=[],t=!1,o=!1,r="",g=()=>{if(!r)return;let l={text:r};t&&(l.bold=!0),o&&(l.italic=!0),n.push(l),r=""};for(let l=0;l<e.length;){let c=e[l];if(c==="\\"&&l+1<e.length&&/[\\`*[\]#_{}()!>~|-]/.test(e[l+1])){r+=e[l+1],l+=2;continue}if(c==="`"){let d=e.indexOf("`",l+1);if(d>l){g();let C={text:e.slice(l+1,d),code:!0};t&&(C.bold=!0),n.push(C),l=d+1;continue}}if(c==="*"&&e[l+1]==="*"){g(),t=!t,l+=2;continue}if(c==="*"){g(),o=!o,l+=1;continue}if(c==="["){let d=/^\[([^\]]+)\]\(([^)\s]+)\)/.exec(e.slice(l));if(d){g();let C=Ae(d[2]),O=F({text:d[1]},C??{});t&&(O.bold=!0),o&&(O.italic=!0),n.push(O),l+=d[0].length;continue}}r+=c,l+=1}return g(),n}var re=/^(#{1,3})\s+(.*?)\s*(?:\{#([a-z0-9-]+)\})?\s*$/,Q=/^(\s*)~~~+\s*$/,he=/^\s*-{3,}\s*$/,N=/^(\s*)([-*]|\d+[.)])\s+(.*)$/,G=/^\s*>\s?(.*)$/,J=e=>e.length-e.trimStart().length;function Se(e){return/^\*\*Not built/i.test(e)?"notbuilt":/^\*\*Not (checked|verified)/i.test(e)?"unchecked":"note"}function Oe(e){return re.test(e)||Q.test(e)||he.test(e)||N.test(e)||G.test(e)}function de(e){let n=[],t=0;for(;t<e.length;){let o=e[t];if(!o.trim()){t++;continue}let r=Q.exec(o);if(r){let d=[];for(t++;t<e.length&&!Q.test(e[t]);)d.push(e[t].startsWith(r[1])?e[t].slice(r[1].length):e[t].trimStart()),t++;t++,n.push({kind:"code",text:d.join(`
`)});continue}let g=re.exec(o);if(g){let d=g[2].replace(/\*\*/g,"").replace(/\\/g,"");n.push({kind:"heading",level:g[1].length,id:g[3]??Ce(d),text:d,spans:Y(g[2])}),t++;continue}if(he.test(o)){n.push({kind:"rule"}),t++;continue}if(G.test(o)){let d=[];for(;t<e.length&&G.test(e[t]);)d.push(G.exec(e[t])[1]),t++;let C=d.join(" ").trim();n.push({kind:"quote",tone:Se(C),spans:Y(C)});continue}if(N.exec(o)){let d=Ie(e,t);n.push(d.block),t=d.next;continue}let c=[];for(;t<e.length&&e[t].trim()&&(c.length===0||!Oe(e[t]));)c.push(e[t].trim()),t++;n.push({kind:"paragraph",spans:Y(c.join(" "))})}return n}function Ie(e,n){let t=N.exec(e[n]),o=/\d/.test(t[2]),r=t[1].length,g=o?parseInt(t[2],10):1,l=[],c=n;for(;c<e.length;){let d=N.exec(e[c]);if(!d||d[1].length!==r||/\d/.test(d[2])!==o)break;let C=r+d[2].length+1,O=[d[3]];for(c++;c<e.length;){let T=e[c];if(!T.trim()){let E=c+1;for(;E<e.length&&!e[E].trim();)E++;if(E<e.length&&J(e[E])>r){O.push(""),c++;continue}break}if(J(T)>r){O.push(T.slice(Math.min(C,J(T)))),c++;continue}break}let j=de(O),_e=j[0]?.kind==="paragraph"?j.shift().spans:[];l.push({spans:_e,children:j});let I=c;for(;I<e.length&&!e[I].trim();)I++;if(I<e.length&&I>c){let T=N.exec(e[I]);T&&T[1].length===r&&/\d/.test(T[2])===o&&(c=I)}}return{block:{kind:"list",ordered:o,start:g,items:l},next:c}}function le(e){let n=e.replace(/\r\n?/g,`
`).replace(/<!--[\s\S]*?-->/g,"");return de(n.split(`
`))}function X(e){return e.flatMap(n=>n.kind==="heading"?[{level:n.level,id:n.id,text:n.text}]:[])}var pe=String.raw`# Backups {#top}

The control device holds the only copy of the permit record: jobs, permits, who signed on, the people it kept, the stations it admitted, and its own keys. Backups are what protect that copy.

## What is backed up, and where {#where}

- Every 5 minutes the control device makes a backup by itself (the first one a minute after it starts). It opens each backup and checks it holds at least every event the record held when the backup began, before it counts. A backup that fails the check is reported, never ignored.
- Each backup is one zip file named **permit-** then the date and time (UTC) then **.zip**. It goes to **E:\permit-backups** when the PC has an E: drive, otherwise to **C:\PermitServer\backups**. A hand install can choose the folder with **-BackupDir**.
- It keeps the newest 288, about one day, and deletes older ones by itself.
- The zip holds the database **and** the control device's keys and certificates. That is why a restored backup is the same control device and stations stay paired. It also means a backup holds private keys and contact details: keep the backup disk, and any copy, as safe as the control device. The copy on the disk is not encrypted.

## Put the backups on a second disk {#second-disk}

A backup on the same disk as the record is lost with it.

1. A hand install warns loudly, in yellow, when the backup folder is on the same disk as the record. Take that seriously.
2. The desktop button picks D: for the record and E: for the backups when they exist. If C: and D: are partitions of one physical disk, that is still one disk: add a second one before you go live.
3. Choose the folders when you install by hand: [Set up the control device](#/guide/control-device#without-hub).

## Check that they are working {#check}

1. On any screen, open the strip at the top (**details**) and read the **backup** line. Green says "last good backup" with how many minutes ago and the file name.
2. **Amber** means no good backup for 15 minutes. **Red** means none for an hour, or that the last one failed, with the reason. Red means the record is not protected: fix the cause first. The usual causes are a backup disk that is full, missing or unplugged.
3. The **disk** line goes amber under 5 GB free and red under 1 GB.
4. Now and then look in the backup folder. The newest zip should be a few minutes old.

## Copy a backup away from the PC {#off-box}

> **Not built yet.** Off-box copies. The design promises a daily encrypted copy to a USB drive kept in the control room and, if the plant wants it, to the hub. Neither exists. Every backup is on the control device's own disks: a second disk covers one disk failing, but a fire, a theft or a dead PC takes both.

Until it is built, do this by hand once a week:

1. Copy the newest zip from the backup folder to a USB drive.
2. Keep the drive locked in the control room. It holds keys.
3. Keep the drive for the previous week too, and swap them.

## Restore {#restore}

A restore puts a backup back on the same PC or on a spare. The steps are in [Replace the control device](#/guide/replace-control-device#from-backup).

> **Not checked.** The restore is proved by the build's own tests, not yet rehearsed on the control-room hardware. Do the drill once on a spare PC and time it. The design asks for one every quarter.

## Copies the updates leave behind {#pre-update}

- Every update copies the stopped record to a folder named **pre-update-** and the time, inside the data folder, and never deletes it. They take disk space. Remove old ones by hand when the new version has run well for a few days.
- An update that had to roll back leaves the failed record in **failed-update-** and the time. Keep it until somebody who knows the system has looked.
`;var ce=String.raw`# Set up the control device {#top}

The **control device** is the one PC that holds the permit record. Every station and every phone talks to it. Set up one, and only one.

## Before you start {#before}

- A Windows PC that stays on, is used for nothing else, and sits somewhere safe. Windows asks for an administrator once.
- Two disks if you can: the permit record on one, the backups on the other. See [Backups](#/guide/backups#second-disk).
- With the hub: the desktop app on this PC, signed in as an administrator.

## With the hub: one button {#with-hub}

Nobody signs in to the hub. You do everything in the desktop app on the control device, and the app talks to the hub for you.

1. In the desktop app open **Admin**, then **Access Management**, and scroll to the **Permit system** card.
2. Read the card. **The hub** should say **Reachable** and "has control device package" with a version. If it says "has no control device package yet", whoever looks after the hub must put the package on the hub first. Nothing else you do here will help.
3. Press **Set up this PC as the permit control device**. Windows asks for administrator permission once. Answer **Yes**.
4. Wait. A progress panel shows each step: downloading from the hub, checking the download, installing, starting. It takes a few minutes. Leave the desktop app open.
5. The control device links itself to the hub within about five minutes. You type nothing. The card then says **Control device installed**, **linked to the hub**, and how many plant people and contractors were loaded.
6. Press **Open permit console**. This is the control device's own screen, in its own window. The desktop app also opens it by itself when it starts on this PC.
7. Check it (below).

What the button chose for you: the record in D:\permit-data and the backups in E:\permit-backups when those drives exist, otherwise both under C:\PermitServer. The certificate lists every address of this PC and its name. The firewall is open to any address, but the control device only talks to stations it approved, each with its own certificate.

If something fails, the card says why in one sentence and shows the installer's log under the progress panel. Fix the cause and press the button again; a failed first install is taken over by the next run.

## Without the hub: install by hand {#without-hub}

Do this when you want to choose the disks or restrict the firewall (the button cannot), or when the hub is not there.

1. Get four files from whoever builds the package and put them together in one folder on a **local** disk of this PC, not a network drive: **permit-server-VERSION.zip**, its **.sha256** file, **install-permit-server.bat** and **install-permit-server.ps1**.
2. For the defaults, double-click **install-permit-server.bat** and answer **Yes** to the administrator question. To choose things, open a Command Prompt in that folder and run:

~~~
install-permit-server.bat -DataDir D:\permit-data -BackupDir E:\permit-backups -TlsNames 172.30.77.1,10.10.190.50 -AllowFrom 172.30.77.0/24,10.10.190.0/24
~~~

3. It checks the zip against its .sha256 file, installs, starts the service and prints the state of each part. Look for lines that are not green.
4. Open the console on this PC at http://127.0.0.1:8093 in a browser. Nothing else can open it: that port never leaves this PC.

What the options mean:

- **-DataDir** is where the record lives.
- **-BackupDir** is where the backups go. It must be on a different disk. The installer warns loudly if it is not.
- **-TlsNames** is every address stations use to reach this PC, on both network cards.
- **-AllowFrom** is the list of addresses the firewall lets through to the station and joining ports.

Link it to the hub later, if there is one: in the desktop app on this PC press **Set up this PC as the permit control device** again. On the same version it only checks the link and makes it.

### The first Control Authority {#first-authority}

A control device installed by hand, with no hub and no backup, starts with nobody who can approve, admit a station or keep the library. Writing a request works with nobody signed in; nothing after it does.

1. At the control device's own console, Home shows **Set up the first Control Authority**. Press it.
2. Type your name. Company and phone are optional.
3. Press **Make me the first Control Authority**. Your card appears with **Sign in with this card now**, **Print the card** and **Copy the code**. Keep the card: it signs you in here and on every station.
4. You are a Control Authority and an admin. On **People** add local people, give them cards, and give someone a role for up to 7 days with **Grant**.

It is offered only at the console, and only while nobody the control device knows can act as a Control Authority. A station shows only a note saying where to go. The record shows under **People**, **Differences**. When the hub's people arrive (they bring their own Control Authorities), **Lift** it there.

Once people data has arrived from the hub it is kept in the record and in every backup, so a hub that goes away later does not take the people with it. See [People](#/guide/people#without-hub).

> **Not checked.** Linking by hand (editing permit.hub-url and permit.hub-feed-key-id in C:\PermitServer\config\application.properties, then restarting the Permit Server service) is in the install notes, but the hub also has to enrol this control device's key, and I found only the desktop app's check-in doing that. Use the desktop app.

## Firewall and disks {#firewall-disks}

- The button opens the firewall to any address. To limit it, install by hand with **-AllowFrom**.
- Put the record and the backups on different physical disks. If C: and D: are two partitions of one disk, add a second disk before you go live.
- If a station's address changes later, run the install again with the new **-TlsNames**. The certificate is remade on the same key, so stations stay paired.
- The control device listens on every network card. The wired permit network and the plant network are a hardware choice the plant makes; no address service or time service for the permit network is built into it.

## Check that it works {#check}

1. On this PC open the console (**Open permit console** on the card, or the address above).
2. The strip at the top reads **Control device OK**. Press **details** to see each part: database, writes, backup, disk, hub, Phones (via hub), Weather (via hub). With no hub linked, the hub line says no hub address is configured.
3. Open **People**. With a hub you see plant staff and contractors with phone and email. Sign in with a badge ([Using the permit system](#/guide/using#sign-in)). Without a hub, set [the first Control Authority](#first-authority) and sign in with their card.
4. Restart the PC and do not sign in to Windows. The service **Permit Server** starts by itself, so the console and the stations come back with nobody logged in.
5. Then set up the stations: [Set up a station](#/guide/station).

## Update, stop, remove {#update}

- **Update.** With the hub the same button reads **Update the control device on this PC to** a newer version. By hand, run **install-permit-server.bat** from the new package: it sees an install and updates. Pick a quiet time: stations show the red STOP WORK page while the server restarts. The update installs beside the old version, copies the stopped record to **pre-update-** and the time inside the data folder (never deleted), and rolls itself back, record included, if the new version is not healthy.
- **Start, restart, look at the log.** In the desktop app on this PC, press the **Permits** light in the top bar. Anybody signed in may use it; Windows does not ask.
- **Remove.** In an elevated PowerShell run **uninstall.ps1** from C:\PermitServer\current. It removes the program and keeps the record, the backups and the settings.

## What is not built yet {#not-built}

> **Not built yet.** Off-box backups: see [Backups](#/guide/backups#off-box). And a clean shutdown on a UPS signal: the service restarts itself after a crash and the record is written before the server answers, but I found nothing in the server or its installer that listens to a UPS.

> **Not checked.** The Windows service itself, the firewall rules and starting with nobody logged in are written but were tested without administrator rights only; the install notes say the real machine is where they get proved. Say so if one of them misbehaves.
`;var ue=String.raw`# The Library {#top}

Everything a request is built from, kept in one place: the plant's **places**, the **hazards** and their **mitigations**, the **steps** and **tools** that bring hazards, the **trades**, the **tasks** jobs are built from, and what **equipment's state** brings. Open **Library** in the menu. Anybody can look; a Control Authority changes it.

## Draft, then publish {#draft}

1. Every change goes into **one draft of the next version**. Requesters never see the draft.
2. The bar at the top says what is in use and how many edits the draft holds, and who made the last one.
3. **Publish...**, write in a line what changed (optional), then **Publish now**. The whole draft goes live together as the next version. Stations take it within a few seconds, phones with their next catalog.
4. **Discard...** drops the draft. Nothing of it went live.
5. A package that was **already approved keeps the version it was approved with**. A request not yet made into permits is checked against the new one; permits made but not approved say "out of date - revise".

Every edit is checked when it is saved. If it would break the library (a hazard naming a mitigation that does not exist, a place inside itself), it is refused with the reason, and nothing is kept.

## Places {#places}

One tree. A **unit** (U1, U2, BOP) at the top; under it any place. A place can also be, ticked on the place itself:

- **An area**: what kind of place (inside, outside, elevated...) and the hazards of **being there**. Only hazards that raise no permit or requirement: the work's own hazards come from its steps and tools.
- **Equipment**: what it is, its energy sources and voltage. It has a state (running, shut down, isolated, opened up, energized for testing); the places under it share that state.
- **People can go inside**: a confined space, with its class. Going in is entering it.

To add, pick a place and type a name under **New place under ...**, then **Add under it**. To move one, change **Put it under**. **Other names people use** are what the search finds besides the name.

Until the plant switches over, requests still use the old Lists. The places built here are used from then on.

## Hazards, mitigations, steps, tools, trades {#blocks}

Pick an item on the left, change it on the right, **Save to the draft**. **Undo** puts the form back.

- **Hazards**: why it matters, the mitigations it needs (all of them, or one of a group, or suggestions), what it raises (permits, a fire watch, an attendant, a gas test, isolation, the Plant Manager), and the paper-form boxes it ticks. **Locked**: when a step or a tool brings it, only a Control Authority can mark it as not applying.
- **Mitigations**: the boxes on the paper forms that confirming it ticks.
- **Steps**: the hazards a step brings, and the mitigations it brings ready to confirm.
- **Tools**: the hazards a tool brings, wherever it is used, and the check that goes on the permit.
- **Trades**: the steps a trade suggests, in order, and the ones it does on every job.
- **Tasks**: "Scaffold erection", "Valve repair": a trade, its steps in order, its tools. **Jobs point at tasks**: a change to a task here changes every job that uses it.

## Jobs {#jobs}

A job (in **Standards**, the flow builder) is its tasks, in phases, and its questions.

- **+ Add from the Library** adds a task that is one of the Library's: its steps and tools stay the Library's. **+ Add the task** adds one written for this job only.
- A task's own questions add to that task: a step, a hazard, a tool, a place, entering a space.
- **Questions of the whole job** are asked once, before the tasks. A yes can add tasks from the Library ("Does it need a scaffold to reach?" adds scaffold erection and removal).
- Answers only ever add. Taking something away stays a Control Authority's "does not apply", with a reason.

**Retire** (with a reason) stops an item being offered. Everything that named it still reads it. It is refused while something live still uses it: the message names what, to change first. **Bring back** offers it again.

**History** under an item lists every change to it: when, who, what.

## Equipment states and conditions {#states}

- **Equipment states**: for each energy source, the hazards each state brings; and for some kinds of equipment, hazards in some states (a transformer opened up: oil). These are rules: edited, never retired.
- **Conditions**: what other crews, the weather and night work add, and the gas limits. Read-only until the plant has reviewed these tables.

Both are drafts for the plant to review.

## Changes {#changes}

Every version published (when, who, the line written), and everything done to the library, newest first.
`;var me=String.raw`# People {#top}

The permit system never makes its own roster of plant staff. **The hub decides who people are and what roles they hold.** The control device decides, at the moment of every action, whether that person may do that thing now. A small, visible list of local changes covers the days the hub is wrong, or not there.

## Who can do what {#roles}

- **Anybody** can write a request, stop work, and sign themselves off. Nobody has to be signed in to write a request.
- **Contractor with a current orientation:** also signs on, and records gas tests.
- **Plant person** (any active user of the main app): also takes requests in (Intake), makes permits, names the fire watch and the attendant, issues contractor cards, adds local people and suspends people.
- **Control Authority:** everything a plant person does, and approves, resumes work, closes permits, marks someone off, extends an orientation, admits stations, and keeps the lists and standards.
- **Manager:** gives the Plant Manager approval. A Control Authority is not a Plant Manager unless the person also has the Manager role.
- **Admin:** grants a temporary role, and nothing else here.
- **LOTO qualified, LOTO requestor:** carried over from the main app, but LOTO is not in the permit system yet.

## With the hub {#with-hub}

People, their companies, phone numbers and emails come from the hub. You do not type them again. Plant staff come from the main app's user list; contractors come from OnLocation, through the hub, about once an hour.

1. The control device pulls the people data every 15 minutes, when it starts, and when you press **Refresh from the hub now** on **People**.
2. The top of **People** says when it last arrived ("from the hub at 14:05") and how many plant people and contractors it holds. The strip on every screen says how old it is. It goes amber after an hour without a good copy.
3. **Roles are changed in the main app**, not here: in the desktop app, **Admin**, then **User Management**. The change reaches the control device with the next people data and takes effect at that person's next action.
4. **Orientation** for contractors comes from OnLocation. A contractor is current when the orientation's valid-to date is today or later.
5. **Badges** are made in the desktop app: **Admin**, **Access Management**, **Orientation badges**. The **Plant personnel** tab makes a plant badge, good for 90 days; an administrator may make one for anyone, everybody else only for themselves. The **Contractors** tab makes a contractor's. Press **Print the badge**, or **Copy the raw value** to paste into a station that has no camera.

### When someone is missing {#missing}

1. Open **People**, **Find**, and type at least two letters of the name or company.
2. Not there? Look at the source. A plant person must be an active user in the main app. A contractor must be in OnLocation with an orientation. Fix it there.
3. Press **Refresh from the hub now**, or wait up to 15 minutes.
4. Cannot wait? Use the local changes below. Then fix the source and lift the change.

## Without the hub {#without-hub}

When the hub is down, OnLocation is wrong, or somebody is simply not in it yet. Everything here is on **People** at the control device. Every change has an author and a reason, and nothing is written back to the hub.

- **Add a local person.** The **Add a local person** tab. Name, company, phone, **Orientation valid to**, and **How was the orientation checked?** (card seen, quiz printout). Shown everywhere as "Local - not on the hub". Plant personnel do this.
- **Suspend.** Select the person under **Find**, give a reason, press **Suspend**. They can still sign themselves off, and nothing else. Plant personnel do this.
- **Extend an orientation.** Select the contractor, choose **Until** a date up to 7 days from today, give a reason, press **Extend**. A Control Authority does this.
- **Grant a temporary role.** Select the person, choose the **Role** and the **Days** (1 to 7), give a reason, press **Grant**. An administrator does this, with a badge or PIN. A Control Authority or the administrator can lift it early.
- **Differences.** The **Differences** tab lists everything the control device says that the hub does not. When the source is fixed, press **Lift** on the line. Lifting a role needs a badge or PIN.

> **Not built yet.** Making the first plant people, or a plant badge, on the control device alone. Plant badges come from the hub only. A plant person who already has a badge keeps using it until its 90 days end. A plant person with no badge and no hub can use a permit PIN if they are a Control Authority or LOTO qualified (below). Everybody who is not plant staff can have a card from the control device (below). A control device that has never had people data from the hub has no plant people: its first Control Authority is set at its console, see [The first Control Authority](#/guide/control-device#first-authority).

### Contractor cards {#cards}

The control device signs its own cards for contractors and local people, so this works with the hub down. A card lasts until the end of the person's orientation, and a card cannot be made for a lapsed one.

1. **People**, then **Issue a card** (or **Contractor card** on the front page).
2. Under **Who is it for?** type at least two letters, then press **Issue card** on the right person.
3. The QR shows on screen. Press **Print the card**, or **Copy the code**. Press **Done** when finished.
4. A lost card: **Withdraw a card** on the same page. Enter its **Card id**, a reason, press **Withdraw**. It stops working on every station at once. There is no un-withdraw: issue a new one.

### Permit PINs {#pins}

For a Control Authority or LOTO-qualified person whose badge cannot be read. PINs are **off** until somebody switches them on at the control device's own console. Contractors always use badges.

1. At the console, **People**, **My PIN**. The card says **Permit PINs: off**. Press **Turn PINs on**. Only the console can do this, not a station.
2. Each person sets their own: **Set my permit PIN**, 4 to 8 digits, then **Set PIN (scan my badge)**. A badge proves it is you. The PIN is kept on the control device only.
3. Three wrong tries lock the PIN for five minutes.
4. The same tab has **Remote approval**, **off** by default. While it is on, a Control Authority may approve from a phone, through the hub. Switch it on or off at the console only.

## Check {#check}

- **Sign in** shows the name, the roles, and "Orientation until" a date, or "NOT CURRENT".
- A lapsed or withdrawn badge still identifies its holder for signing off. Leaving is never refused.
`;var fe=String.raw`# Replace the control device {#top}

For when the control device PC has died, or is being swapped for a new one. There are two cases. Which one you are in depends on one thing: **do you have a backup?**

## First, one control device only {#one-only}

Never run two control devices from the same record. Switch the old one off, or unplug its network cable, before the new one starts. The hub accepts only one enrolled control device.

## With a backup: the new PC takes over, stations stay paired {#from-backup}

You need the newest backup zip (from the backup disk, or from your weekly USB copy: [Backups](#/guide/backups#off-box)) and a spare PC. Because the backup holds the keys, the new PC becomes **the same control device**: still linked to the hub, with every station still paired.

Best: give the new PC the old one's network addresses. Stations look for those addresses.

1. Switch off or unplug the old control device.
2. On the new PC install the control device the way you did the first one: [Set up the control device](#/guide/control-device). Use the same disks and folders if you can.
3. Check that the console opens, then stop the service. In an elevated PowerShell:

~~~
Stop-Service permit-server
~~~

4. Copy the backup zip onto this PC, for example to C:\restore.
5. Restore. In the same elevated PowerShell, go to the installed version and run the server once with the backup named. Use your own folders where they differ: C:\PermitServer\config\install.json lists the data and backup folders the install used.

~~~
cd C:\PermitServer\current
.\runtime\bin\java.exe -jar permit-server.jar --spring.config.additional-location=file:C:/PermitServer/config/ --permit.data-dir=D:\permit-data --permit.backup-dir=E:\permit-backups --permit.station-dir=C:\PermitServer\station --permit.restore-from=C:\restore\permit-STAMP.zip
~~~

6. The current record and keys are moved aside (never deleted), the backup is unpacked in their place, and the server starts in that window. Wait for the log line that says it was restored and that the number sequences moved forward by 100, then press Ctrl+C.
7. Start the service again: **Start-Service permit-server**, or **Start** on the **Permits** light in the desktop app.
8. Check: the console opens, the strip is green, **People** is full. Stations reconnect by themselves in about 30 seconds. They do not need to join again.

What to expect:

- Anything that happened after the backup was taken is gone, up to five minutes of work. Compare the **Permits** board with the paper in the field.
- Numbers continue 100 higher than anything issued before the backup, so a number already on paper is never issued twice.
- The hub link comes back with the record. The desktop app on the new PC confirms it within five minutes.

> **Not checked.** The restore is proved by the build's own tests, not yet rehearsed on the control-room hardware, and the command above is put together from the installer's own settings rather than copied from a run. The shorter form in the server notes (--permit.data-dir and --permit.restore-from only) is the one the tests use. Rehearse this on a spare PC and time it before you need it.

## Brand new, no backup {#brand-new}

The record is gone: jobs, permits, who signed on, the local people changes, the list of stations, the standards people saved. What comes back by itself: the people (from the hub), the plant's lists (seeded once from the hub), the library, and the hub link (the desktop app enrols the new control device within five minutes).

1. Install the control device as new: [Set up the control device](#/guide/control-device).
2. Every station now sees a different key at the old address. It shows a red notice that this is not the control device it was paired with, and a button **Join the new control device...** in its bottom bar. Kiosk stations show it too.
3. On each station press **Join the new control device...**. If the desktop app already told it the new key it asks "The control device was replaced. Ask it to accept this PC?": press **Ask to join**. Otherwise it shows the new key in groups. Compare the first and last group with the top of the **Devices** page on the console, type them, and press **Join the new control device**.
4. On the console, open **Devices**, find the PC under **Waiting to join**, check the 6-digit number against the station's screen, and press **Approve** with a Control Authority's badge or PIN. See [Set up a station](#/guide/station#approve).
5. The old pairing is kept until the new control device accepts the PC. **Back to the station** gives up and goes back.

> **Not built yet.** Permit numbers start again from the beginning on a control device with no backup, so a number already posted in the field can be issued a second time. Before you go live again, find the highest number in use on paper. I found no screen or command to set where numbering starts.

> **Not built yet.** Moving the stations to a control device at a new address in one step. A station finds the control device at the addresses in its own settings. Give the new PC the old addresses. If that is impossible, each station needs its address changed by hand (the station's config.json). I did not verify that path in the code.
`;var ge=String.raw`# Set up a station {#top}

A **station** is a PC (or a wall board) that shows the permit screens of the control device. It keeps no record of its own. The control device is in charge of who joins: a new station asks, and a **Control Authority** says yes. Nobody types a code, and the hub is not needed.

## Which kind {#kinds}

- **Plant-network station** (the default). The control-room PCs and any other PC on the plant network. This is the day-to-day path.
- **Core station.** A PC on the wired permit network. It keeps working when the plant network is down. Use it for the wall board and the contractor sign-on PC.
- No PC should be on both networks.
- **Kiosk.** Full screen, no menu, cannot be closed, starts when its Windows user signs in. Install it while signed in as the kiosk's user. To leave it, Ctrl+Alt+Shift+Q (it asks first). Ctrl+Alt+Shift+R forgets the pairing (it asks first).

## With the hub: the desktop app {#with-hub}

On a PC that has the desktop app. No administrator permission is needed.

1. In the desktop app open **Admin**, then **Access Management**, and scroll to **Permit system**.
2. Tick **Kiosk (full screen, starts with Windows)** if this is a kiosk, and **Core station (permit network)** if it is on the permit network.
3. Press **Install Permit Station on this PC**. The app asks the hub where the control device is (or uses the address it saved last time, if the hub is down), downloads Permit Station **from the control device itself**, installs it and opens it.
4. Permit Station shows **Waiting for the control room to approve this PC** and a 6-digit number. Now a Control Authority approves it: [Approve a new station](#approve).
5. It opens by itself once approved. Later, **Open Permit Station** on the card starts it again.

If something other than the control device answers at the address, Permit Station stops and says so. Do not go on: tell whoever set the PC up.

## Without the hub: the USB installer {#without-hub}

For a PC with no desktop app, or when the hub is down and the app does not know the control device yet. You need the console, which is on the control device PC itself.

1. On the control device, open the console and then **Devices**.
2. Press **Save station installer**. This saves a zip that already knows this control device. (The button is only on the console, not on a station.)
3. Copy the zip to a USB stick and to the new PC. Unzip it there.
4. Double-click **install-station.bat**. For a kiosk, double-click **install-station-kiosk.bat** instead, signed in as the kiosk's user. No administrator permission is needed.
5. Start **Permit Station** from the Start menu. It asks only for a name for this PC and its network (core or plant network).
6. It shows **Waiting for the control room to approve this PC** and a 6-digit number. Approve it: [Approve a new station](#approve).

A station set up some other way, with no addresses, asks for the control device's address, a name, a network, and the first and last group of the control device's key. That key is at the top of the **Devices** page on the console.

## Approve a new station {#approve}

Any Control Authority can do this, on the console or on any station that is already paired.

1. Look at the top of any screen. A blue bar says "1 PC is asking to join" with a **Devices** link. Press it, or open **Devices**.
2. Under **Waiting to join** find the PC. Compare its 6-digit number with the one on the new PC's own screen. The number is worked out from the new PC's own key, so only that PC shows it.
3. If the numbers match and you know the PC, press **Approve**, then scan your own badge or enter your own PIN. The station opens by itself.
4. If the number is different, or you do not know the PC, press **Reject**. You may say why. The station is told no and must ask again.

A request waits 30 minutes. A station that was not answered asks once more by itself, then says "Nobody answered the request" with an **Ask again** button. A restarted station picks its request up again.

## Check it {#check}

1. The bar at the bottom of the station names the address in use. A station on both networks warns about it.
2. Sign in on it with a badge: [Using the permit system](#/guide/using#sign-in).
3. On the console, **Devices** lists it under **Paired stations**, with how it joined: "Approved by" a name and the PC.

## Sign-out time {#sign-out}

How long a station stays signed in when nobody uses it. A Control Authority sets it per station.

1. Open **Devices**. Each paired station has **Signs out after**: 5, 15 or 60 minutes, or never (until hand over).
2. Pick one, then scan a Control Authority's badge or enter a PIN.
3. A station nobody chose for signs out after 5 minutes, as before. Kiosks and the wall board should stay that way.
4. Control-room PCs can be set to never. The control device's own window is a control-room PC: it stays signed in unless you choose a time for it (**This control device's own window**, at the top of the list).

**Hand over (sign out)** always signs out at once, whatever the setting.

## Remove or replace a station {#revoke}

- **Revoke.** **Devices**, press **Revoke** on the station, say why (for example lost or retired), then scan a Control Authority's badge or enter a PIN. It is refused at its very next request and has to join again.
- To take Permit Station off a PC, run **install-station.ps1 -Uninstall** from the unzipped installer folder (or **install-station.bat -Uninstall**). Add **-RemoveData** to forget the pairing too.
- Permit Station updates itself from the control device. The bar offers **Update now** or **At next restart**.

## When the control device cannot be reached {#stop-work}

A station that cannot reach the control device for about 30 seconds covers the screen with a red **STOP WORK** page. It shows the last list of who is on which permit, with its age, for mustering. It is read only and can be printed. It goes away by itself when the control device answers. If you are on a plant-network station, use a wired core station.

> **Not built yet.** A button on the console to change the address a station looks for. If the control device gets a new address, stations must be told by hand (their settings file) or the new PC must take the old address. See [Replace the control device](#/guide/replace-control-device#brand-new).

> **Not checked.** I read the station's and the installer's notes, not a run on a clean PC, so the first start on a real PC is where a screen may read differently from this page.
`;var we=String.raw`# Using the permit system {#top}

How a request becomes permits, and how people work under them. For setting things up, see [Set up the control device](#/guide/control-device), [Set up a station](#/guide/station) and [People](#/guide/people).

## Where it runs {#screens}

- **The console.** The control device's own screen, in the desktop app (**Open permit console**) or at http://127.0.0.1:8093 on that PC.
- **A station.** The Permit Station app on a control-room PC, a wall board or a kiosk. Same screens as the console.
- **A phone.** https://jacksongeneration.github.io/permits/request/ : write requests, sign on and off, and (for plant people) look at the control room. See [Phones](#phones).

The menu: **Home**, **Requests**, **Intake** (plant people), **Permits**, **People**, **Lists** (Control Authorities), **Devices** (Control Authorities), **Guide**. Your name, or **Sign in**, is at the far end of the menu.

## Sign in {#sign-in}

You do not need to sign in to write a request. You do to approve, take requests in, sign on and most other things.

1. Press **Sign in** at the end of the menu.
2. Press **Scan a badge**, or **Type or paste a badge code instead** and then **Use this badge**.
3. No badge? Press **Use a permit PIN**, type your name, pick yourself, type your PIN, press **Use this PIN**. This works only for Control Authorities and LOTO-qualified people, and only when the control room has switched PINs on: [Permit PINs](#/guide/people#pins).
4. Where do badges come from? Plant staff: the desktop app, **Admin**, **Access Management**, **Orientation badges**. Contractors: a card made at the control device; on a phone, the link they were emailed after orientation works too. See [People](#/guide/people#with-hub).
5. When you are done press **Hand over (sign out)**. On a shared station always do this. A station signs you out after the time a Control Authority set for it (5, 15 or 60 minutes, or never): [Sign-out time](#/guide/station#sign-out). The **Sign in** page says which.
6. Approving asks for **a badge or PIN each time**, even if somebody is signed in: it is the signature on the permits. The person who scans is the person the record names, so a station left signed in as a Control Authority cannot approve for them. Everything else uses whoever is signed in. Acting for somebody else (accepting as the holder, signing someone on) takes that person's own badge or PIN.

## Orientation {#orientation}

Contractors must have a current site orientation to sign on. It comes from OnLocation through the hub, or from a local entry a plant person made.

- **Sign in** shows "Orientation until" a date, or **NOT CURRENT**.
- A lapsed orientation cannot sign on. It can always sign **off**: leaving is never refused.
- A Control Authority can extend one for up to 7 days, with a reason: **People**, select the person, **Extend orientation**. See [People](#/guide/people#without-hub).

## Write a request {#request}

A **request** says what work is about to be done, where, by whom, with which hazards and controls. The control room makes the permits from it. You never fill in permit forms.

1. On **Home** press **New request** (or **Requests**, then **New request**).
2. Choose how to start: **Start blank**, **From a standard** (search by name, task or equipment tag), or **My recent requests**. See [Standards and flows](#standards).
3. Say who and when: company, date, start time and hours, what the job is, who is doing it, and who signs on to the permits.
4. Add the tasks. For each one say where, the steps, the equipment, and what could hurt someone.
5. On the hazards, **nothing is ticked for you**. Each hazard comes with the controls it needs. Confirm each required control. **Next** stays blocked until you have. A hazard the plant or the area put there is locked: only a Control Authority sets it aside, with a reason.
6. Something not in the plant's list? Describe it in your own words. The request is still sent: a Control Authority matches it later.
7. On the last page press **Send to the control room**. Until then it is a draft: **Save draft** (when you are signed in) keeps it, and **Requests** shows it first, under **Your drafts**.
8. The control room may send it back with a question. Open it from **Requests**, read "The control room asked", fix it, send it again.

### Where the work is {#places}

Each task needs a place: **Unit**, then **Area**, then, if you want, a more specific place or your own words.

1. Pick the **Unit**: **U1**, **U2** or **BOP**. Required.
2. Pick the **Area** under that unit, shown in groups (for U1 and U2: Turbines & generator, Electrical, Systems; for BOP: Electrical, Yard & utilities, Buildings & yard). Required.
3. Below that is one box, **More specific** (optional). Without typing it lists what is under the area: places, skids (they open), confined spaces and equipment. Type to narrow it, or type your own words: what you type is always offered as **Use "..." as written**, and Enter takes it. Free text never stops the request being sent; the approver reads it.
4. While you type, **Elsewhere in U1** (or U2, BOP) also lists matches from the rest of the unit. The plant's list is still being sorted, so the pump you want may not hang under the area yet. Picking one keeps the area you chose.
5. Picking a piece of equipment asks what state it is in: **running**, **shut down**, **locked out**, **opened up**, or **energized for testing**. The state is required for equipment, because it decides the hazards.
6. **+ Another place** adds a second place to the same task. A task needs at least one place with a unit and an area.

### Flows {#flows}

A **flow** is a pre-made job with several tasks, for work the plant does the same way every time (the gas turbine outage is one). Most of the request is already written. You say when, tick what applies today, check it, and send.

1. **When.** Your name and company are filled from your badge or sign-in; they are not asked. If the flow asks, pick the unit (for example U1 or U2). Then the date, start time and hours.
2. **Today's work.** Every task of the flow is a box, grouped by phase. Nothing is ticked at the start. Tick a task and its questions open right under it: answer **Yes** or **No**. The answers add steps, hazards or places to that task.
3. **Review.** One card per ticked task, with its place, steps, hazards and controls already filled. Each card has **Where**, **Steps**, **Hazards** and **Tools** to change what is not right. The controls are confirmed again by you.
4. **Send.** You may also save it as your own standard. A request started from a flow never changes the flow itself.

A Control Authority makes and publishes flows: [Standards and flows](#standards).

## Take a request in: Intake {#intake}

Plant people and Control Authorities. **Intake** lists requests waiting for the control room. The **Intake** door on **Home** shows how many are waiting.

1. Each card shows the company, who sent it, the tasks and how many hazards each one has, and any the requester says do not apply. A phone request says **from phone**.
2. If the requester described something that is not in the plant's lists, map it now: **Map to...** the right area, space or equipment, or **Add to the list**. A request cannot be approved while one is unmapped.
3. Press **Accept**. Under **Who will run the job (the holder)?** pick the holder, or leave it empty if a foreman will come for it. Then **Accept as a job**. If it looks like a copy of another request you must say it is separate work.
4. Or press **Send back with a question** and say what the requester must answer, or **Reject** and say why.

## Make the permits {#permits}

1. Open the job (from **Requests**, or press **Open the whole request** in Intake).
2. Press **Make today's permits**. The control device makes one **package** per task for the day: a Safe Work permit, plus Hot Work, Confined Space, Energized Work, Venting or Excavation when the hazards require them.
3. A package is valid from the request's start time for its hours, at most 12. A night shift runs past midnight.

## Review and approve {#review}

A Control Authority reviews a package on one screen, top to bottom. Open it from **Permits**: **Review the package**.

1. **Where it stands.** The state and what still stops approval, under "Before these can be approved".
2. **The plant's lists.** Anything unmapped, or equipment or areas nobody has reviewed, is settled or ticked here for this job.
3. **Hazards.** Every hazard of the task, where it came from, and what the crew said it will do. A hazard the requester proposes not to apply: **Accept: does not apply** or **Refuse: keep it in force**. A locked hazard you set aside: **Does not apply today...**, give a reason (it prints on the permit), **Mark: does not apply**.
4. **Conditions today.** Other crews nearby, the weather and night work add hazards the requester could not know. Tick the controls, then **Confirm these controls**.
5. **Requirements to work safely.** Isolation and the lift plan are not records yet: a Control Authority ticks **Confirmed by a Control Authority** for each. A gas test is met by recording one: **Record a gas test**.
6. **The permits.** Name the fire watch on every Hot Work and the attendant on every Confined Space (**Name someone**). The package cannot be approved without them.
7. **Approval.** Press **Approve these permits**, then scan your own badge or enter your own PIN. It is refused, with the reason, if you are the requester or made the last safety-relevant change.
8. Some work needs the **Plant Manager** as well. The screen then shows "Plant Manager" and a **Plant Manager approval** button. A different person with the Manager role scans their own badge. Either may go first. They must be two different people, and neither the requester.

After approval the screen says **Just approved**. The holder accepts for the crew next.

## Sign on, sign off {#sign-on}

Open **Who is on the job** from the **Permits** board (**Sign on / off**).

1. **Holder accepts.** The holder presses **Holder accepts for the crew**. Signed in as the holder, that is all; if somebody else is signed in, the holder scans their own badge or enters their own PIN. If no holder was named, whoever accepts becomes the holder.
2. The package is now **Active**. Sign-on opens at the start time: before it the screen says "These permits start at" a time.
3. Each person ticks **I have read the hazards and controls for this work**. Sign-on stays closed until the box is ticked. Everyone reads and ticks for themselves.
4. Pick **As**: Crew, Entrant, Attendant or Fire watch. Press the button that carries your name, for example **Sign Dana Reed on**. To sign someone else on, use **Sign somebody on with their badge or PIN**: it must be their own badge or PIN. A lapsed orientation is refused.
5. When the package requires a gas test, record a passing one before a confined-space entrant signs on, and within the hour before the crew starts hot work.
6. To leave, press **Sign off**. It is always allowed, even on a lapsed orientation. If someone has gone without signing off, a Control Authority presses **Gone?** or **Mark off** with a reason. It records that they left; it is not their sign-off.

## Stop work {#stop-work}

Anybody identified can stop work. It can only make things safer.

1. On **Who is on the job**, under **Stop work, finish, close**, write why and press **Stop work**. To stop only one permit, press **Stop work under this permit** on it, write why, and press **Stop work under it**. The rest of the package goes on. A Control Authority puts it back with **Resume this permit**.
2. Nobody can sign on. People already on should leave any confined space.
3. Everyone on the package sees a red **STOP WORK** notice.
4. Only a Control Authority resumes: **Resume work**. Entry to a confined space still needs a passing gas test from the last hour before anyone signs on again.

## Revise, renew, close {#revise}

- **Revise.** After approval, a change to the plan is a new revision, never an edit. On the package review press **Revise (new revision)**, write why, press **Rebuild as a new revision**. The old revision stays on record as replaced; the new one needs approving again. People on the old one stay listed as "on revision 1 - not yet re-signed" until they sign on to the new one or are signed off. Changing the JHA of live work stops its packages with "The JHA changed - revise the permits".
- **Renew.** For work that goes on, on the package review press **Renew for the next day**. The new package needs a fresh approval and fresh sign-ons.
- **Close.** When the work is over: 1. everybody signs off; 2. the holder presses **Work has stopped (holder)** (refused while anybody is still on); 3. a Control Authority presses **Close these permits**. A Hot Work permit waits for its fire watch to end. A closed permit never reopens; a late sign-on is refused.
- A package that was not closed at the end of its time shows **EXPIRED**, with anybody still on named. Sign them off or mark them off, then close it or renew it.
- On the job, **Work is complete** ends the job; **Cancel the job** (a Control Authority) cancels it.

## The Permits board {#board}

**Permits** lists every open package in bands: Waiting for approval, Approved (waiting for the holder), Work under way, Stopped, and Expired or people still on. Each shows its permits with the state of each on its own, who is on and since when. A list that could not be refreshed is marked OLD: do not rely on it.

## Print and check a sheet {#print}

- On the package review, **Print all** prints the sheets. Printing is recorded against the person who prints it, so sign in first. **Show the paper form** shows what will print; **Edit the ticks** goes back.
- Each sheet has a QR. **Check a printed sheet** (on **Home** or **Permits**) scans it, or you type the number and revision. It says whether the sheet is the current revision or has been replaced.
- Paper stays the legal record. The system fills it in and records its number, revision, state and approver.

## Lists (Control Authorities) {#lists}

**Lists** holds the plant's areas, confined spaces and equipment that requesters pick from. Each one brings its hazards.

- **The areas are a tree**: unit (U1, U2, BOP), then the plant areas in groups, then more specific places and equipment. The control device makes the standard areas by itself and sorts the hub's places and equipment onto them by their Maximo system. That sorting is a draft: each guess is in the **Review queue**, and what it could not place is under **Unsorted** in each unit.
- **Not built yet:** moving, renaming and regrouping areas, and placing **Unsorted** equipment, from this screen. Until then requesters still find unsorted equipment through **Elsewhere in U1** when they type.

- Tabs: **Areas**, **Confined spaces**, **Equipment**, **Review queue**, **Candidate spaces**.
- **Add**, **Edit**, **Retire** (with a reason), **Bring back**, **Mark reviewed**, and nicknames people use. Nothing is ever deleted.
- **Review queue.** Items nobody checked, quick-adds from requests, and differences from the hub. Accept or dismiss.
- **Candidate spaces.** Confined spaces found in old permits. **Confirm as a space...** or **Reject**.
- **Check the hub for changes** compares the lists with the hub's plant catalog. The first time it seeds them; after that the differences go to the review queue.

## Standards and flows {#standards}

A **standard** is a job written once, to start the next request from. It holds tasks, steps, hazards, confirmed controls, places and tools, never a date, a time or people. Three levels: **plant** (published by a Control Authority), **company** (for a contractor's own company) and **personal**. Every request started from one is still checked from scratch.

- Start one from **New request**, or open **Standards** on **Home**. A standard with several tasks asks which happen today.
- On the last page, **Update the standard with my changes** (only if you may change it) or **Save as a new personal standard**.
- **Standards** has filters (**All**, **Plant**, **Company**, **Personal**, **Drafts**, **Retired**) and, per standard: **Show what is in it**, **Edit name and description**, **Edit the tasks and places**, **Copy to the plant as a draft**, **Publish** (Control Authority), **Retire** and **Bring back**.
- A Control Authority sees "From standard NAME - changed:" on a request, so a copy that wandered is easy to spot. Prebuilt drafts (HVAC, winterization, scaffolding, insulation) say "written without plant input"; review them before you publish.
- After a Control Authority adds a hazard or a control in review, one tap keeps it in the area, on the equipment, or in the standard it came from.

**Flows** are plant standards with several tasks, plus questions and a place. A Control Authority builds one under **Standards**, then **Flows** (**New flow**, or **Edit the flow** on one): add the tasks, add yes-or-no questions to a task with what each answer adds, set the default place, **Save the draft**, and **Check it**. **Publish** makes it visible. Every change is a new version. The new GT outage flow is a draft written without plant input: review it before you publish it. Publishing it retires the old GT Outage standard.

## Phones {#phones}

Open https://jacksongeneration.github.io/permits/request/ . A plant person signed in to the plant app is already signed in. A contractor opens the badge link they were emailed. The menu: **Home**, **New request**, **My requests**, **Sign on / off**, **Control room** (plant people only) and **Guide**. A strip says "Control room last checked in N min", or "Hub not reachable".

- **Request.** The same screens as a station. Photos can be added: up to three for the job, and three for each item. After **Send**, **My requests** says "sent - waiting for the control room", then the control room's answer, usually in seconds. A request that is missing something comes back listing what.
- **Sign on.** **Sign on / Sign off**. Type the **Permit number** (for example JG26-00031) or pick a recent one, then **Sign on**. Read "Before you sign on to ...", tick the box, press **Sign on to** the number. It says "Signed on" only after the control room confirms. A sign-on older than 15 minutes is refused, never applied late. **Sign off** is the same.
- **Control room.** Plant people only: the open work and its age. **Approve from my phone** and **Plant Manager approval** appear only while **Remote approval** is on at the console.
- A stop-work or lightning notice shows as a red banner at the top until it clears.
- With the hub down the phone says so, and the control room carries on without it. Things sent while the control device was away are delivered when it is back.

## The status light and notices {#status}

- **The strip.** Every screen has it. **Control device OK** is green. **Control device: attention** is amber. **CONTROL DEVICE PROBLEM** is red, and says which part and why. **details** shows each part. It also shows how old the people data is, the library version, and "Weather (via hub)", which is amber when unknown and never stops anything.
- **The Permits light** in the desktop app's top bar, on the control device PC only: green, amber, red or grey (stopped). Press it for the server's state in plain words, and **Start**, **Restart**, **Show log**, **Open permit console**. Anybody signed in can use it.
- **Desktop notifications** on the control device: when the server has not answered for a minute, turns red, or is running again. Press one to open the Permit system card, or the console while the server answers. They are on unless somebody turned them off in the desktop app's **Settings**.
- **STOP WORK page.** A station that cannot reach the control device for about 30 seconds shows a full red page with the last list of who is on which permit, for mustering.
- **On a package.** **LIGHTNING - STAND DOWN** in red when the alarm is on and work is outdoors or high. Nothing is stopped for you: a Control Authority decides. **STOP WORK** in red when a package or a permit is stopped. **New work nearby**: a Control Authority presses **Acknowledge (Control Authority)**. **Gas retest due**: press **Record a gas test**.
- **Asking to join.** A blue bar "1 PC is asking to join" until a Control Authority answers: [Approve a new station](#/guide/station#approve).

## What is not built yet {#not-built}

- **LOTO.** Isolations are not in the permit system yet. The main app still does them.
- **Email and text messages.** I found no sending of either in the permit server. Everything is on screen, in the desktop app's notifications, and on the phone.
- **Emergent work.** The record can carry an EMERGENT mark and shows it. I found no switch for it in the request screens.
- **Backups off the PC and a rehearsed restore:** [Backups](#/guide/backups).

> **Not checked.** The two sections marked in the source for a re-check (**Where the work is** and **Flows**) describe the screens as agreed for this release. The rest was read against the screens' own labels, not by running them.
`;var ke={"control-device":ce,backups:pe,"replace-control-device":fe,station:ge,people:me,using:we,library:ue},R=K.map(e=>ee(F({},e),{markdown:ke[e.id]}));function be(e){return R.find(n=>n.id===e)??null}var ye=new Map;function ve(e){let n=ye.get(e);return n||(n=le(ke[e]),ye.set(e,n)),n}var _=e=>({$implicit:e});function qe(e,n){if(e&1&&(h(0,"a",7),m(1),s()),e&2){let t=a().$implicit,o=a(2);A("b",t.bold)("i",t.italic),p("href",o.guideHref(t),v),i(),k(t.text)}}function Ne(e,n){if(e&1&&(h(0,"a",8),m(1),s()),e&2){let t=a().$implicit;A("b",t.bold)("i",t.italic),p("href",t.url,v),i(),k(t.text)}}function Re(e,n){if(e&1&&(h(0,"code"),m(1),s()),e&2){let t=a().$implicit;A("b",t.bold),i(),k(t.text)}}function We(e,n){if(e&1&&(h(0,"span"),m(1),s()),e&2){let t=a().$implicit;A("b",t.bold)("i",t.italic),i(),k(t.text)}}function Fe(e,n){if(e&1&&u(0,qe,2,6,"a",3)(1,Ne,2,6,"a",4)(2,Re,2,3,"code",5)(3,We,2,5,"span",6),e&2){let t=n.$implicit;f(t.guide?0:t.url?1:t.code?2:3)}}function ze(e,n){if(e&1&&x(0,Fe,4,1,null,null,M),e&2){let t=n.$implicit;P(t)}}function De(e,n){e&1&&w(0)}function Ue(e,n){if(e&1&&(h(0,"h1",10),u(1,De,1,0,"ng-container",2),s()),e&2){let t=a(2).$implicit,o=a(2),r=y(1);p("id",o.anchorId(t.id)),i(),p("ngTemplateOutlet",r)("ngTemplateOutletContext",b(3,_,t.spans))}}function Be(e,n){e&1&&w(0)}function Ge(e,n){if(e&1&&(h(0,"h2",10),u(1,Be,1,0,"ng-container",2),s()),e&2){let t=a(2).$implicit,o=a(2),r=y(1);p("id",o.anchorId(t.id)),i(),p("ngTemplateOutlet",r)("ngTemplateOutletContext",b(3,_,t.spans))}}function Le(e,n){e&1&&w(0)}function je(e,n){if(e&1&&(h(0,"h3",10),u(1,Le,1,0,"ng-container",2),s()),e&2){let t=a(2).$implicit,o=a(2),r=y(1);p("id",o.anchorId(t.id)),i(),p("ngTemplateOutlet",r)("ngTemplateOutletContext",b(3,_,t.spans))}}function Ve(e,n){if(e&1&&u(0,Ue,2,5,"h1",10)(1,Ge,2,5,"h2",10)(2,je,2,5,"h3",10),e&2){let t,o=a().$implicit;f((t=o.level)===1?0:t===2?1:2)}}function $e(e,n){e&1&&w(0)}function He(e,n){if(e&1&&(h(0,"p"),u(1,$e,1,0,"ng-container",2),s()),e&2){let t=a().$implicit;a(2);let o=y(1);i(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",b(2,_,t.spans))}}function Ke(e,n){e&1&&w(0)}function Ye(e,n){e&1&&w(0)}function Je(e,n){if(e&1&&u(0,Ye,1,0,"ng-container",2),e&2){let t=a().$implicit;a(5);let o=y(3);p("ngTemplateOutlet",o)("ngTemplateOutletContext",b(2,_,t.children))}}function Qe(e,n){if(e&1&&(h(0,"li"),u(1,Ke,1,0,"ng-container",2)(2,Je,1,4,"ng-container"),s()),e&2){let t=n.$implicit;a(5);let o=y(1);i(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",b(3,_,t.spans)),i(),f(t.children.length?2:-1)}}function Xe(e,n){if(e&1&&(h(0,"ol"),x(1,Qe,3,5,"li",null,M),s()),e&2){let t=a(2).$implicit;U("start",t.start),i(),P(t.items)}}function Ze(e,n){e&1&&w(0)}function et(e,n){e&1&&w(0)}function tt(e,n){if(e&1&&u(0,et,1,0,"ng-container",2),e&2){let t=a().$implicit;a(5);let o=y(3);p("ngTemplateOutlet",o)("ngTemplateOutletContext",b(2,_,t.children))}}function nt(e,n){if(e&1&&(h(0,"li"),u(1,Ze,1,0,"ng-container",2)(2,tt,1,4,"ng-container"),s()),e&2){let t=n.$implicit;a(5);let o=y(1);i(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",b(3,_,t.spans)),i(),f(t.children.length?2:-1)}}function ot(e,n){if(e&1&&(h(0,"ul"),x(1,nt,3,5,"li",null,M),s()),e&2){let t=a(2).$implicit;i(),P(t.items)}}function it(e,n){if(e&1&&u(0,Xe,3,1,"ol")(1,ot,3,0,"ul"),e&2){let t=a().$implicit;f(t.ordered?0:1)}}function at(e,n){if(e&1&&(h(0,"pre")(1,"code"),m(2),s()()),e&2){let t=a().$implicit;i(2),k(t.text)}}function st(e,n){e&1&&w(0)}function rt(e,n){if(e&1&&(h(0,"aside",11),u(1,st,1,0,"ng-container",2),s()),e&2){let t=a().$implicit;a(2);let o=y(1);A("notbuilt",t.tone==="notbuilt")("unchecked",t.tone==="unchecked"),i(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",b(6,_,t.spans))}}function ht(e,n){e&1&&q(0,"hr")}function dt(e,n){if(e&1&&u(0,Ve,3,1)(1,He,2,4,"p")(2,it,2,1)(3,at,3,1,"pre")(4,rt,2,8,"aside",9)(5,ht,1,0,"hr"),e&2){let t,o=n.$implicit;f((t=o.kind)==="heading"?0:t==="paragraph"?1:t==="list"?2:t==="code"?3:t==="quote"?4:t==="rule"?5:-1)}}function lt(e,n){if(e&1&&x(0,dt,6,1,null,null,M),e&2){let t=n.$implicit;P(t)}}function pt(e,n){e&1&&w(0)}var L=class e{blocks=V.required();page=V("");anchorId(n){return"guide-"+n}guideHref(n){let t=n.guide;return`#/guide/${t.page??this.page()}${t.anchor?"#"+t.anchor:""}`}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=D({type:e,selectors:[["app-markdown-view"]],inputs:{blocks:[1,"blocks"],page:[1,"page"]},decls:5,vars:4,consts:[["inline",""],["blockList",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"in",3,"b","i","href"],["target","_blank","rel","noopener noreferrer",1,"out",3,"b","i","href"],[3,"b"],[3,"b","i"],[1,"in",3,"href"],["target","_blank","rel","noopener noreferrer",1,"out",3,"href"],[1,"quote",3,"notbuilt","unchecked"],[3,"id"],[1,"quote"]],template:function(t,o){if(t&1&&u(0,ze,2,0,"ng-template",null,0,$)(2,lt,2,0,"ng-template",null,1,$)(4,pt,1,0,"ng-container",2),t&2){let r=y(3);i(4),p("ngTemplateOutlet",r)("ngTemplateOutletContext",b(2,_,o.blocks()))}},dependencies:[ie],styles:["[_nghost-%COMP%]{display:block;line-height:1.55;font-size:15px;color:#1f2933}h1[_ngcontent-%COMP%]{margin:0 0 10px;font-size:24px}h2[_ngcontent-%COMP%]{margin:26px 0 8px;font-size:18px;padding-top:6px;border-top:1px solid #e4e8ee;scroll-margin-top:64px}h3[_ngcontent-%COMP%]{margin:18px 0 6px;font-size:15px;scroll-margin-top:64px}h1[_ngcontent-%COMP%]{scroll-margin-top:64px}p[_ngcontent-%COMP%]{margin:8px 0}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:8px 0;padding-left:24px}li[_ngcontent-%COMP%]{margin:5px 0}li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] > ol[_ngcontent-%COMP%]{margin:4px 0}.b[_ngcontent-%COMP%]{font-weight:700}.i[_ngcontent-%COMP%]{font-style:italic}code[_ngcontent-%COMP%]{font-family:Consolas,Courier New,monospace;font-size:.92em;background:#f1f4f9;padding:1px 5px;border-radius:4px}pre[_ngcontent-%COMP%]{margin:10px 0;padding:10px 12px;background:#f1f4f9;border:1px solid #dde3ec;border-radius:7px;white-space:pre-wrap;word-break:break-word;overflow-x:auto}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:none;padding:0;font-size:13px}a[_ngcontent-%COMP%]{color:#2d6cdf}hr[_ngcontent-%COMP%]{border:0;border-top:1px solid #e4e8ee;margin:18px 0}.quote[_ngcontent-%COMP%]{margin:12px 0;padding:9px 13px;border-left:4px solid #2d6cdf;background:#eef4ff;border-radius:0 7px 7px 0}.quote.notbuilt[_ngcontent-%COMP%]{border-left-color:#c47f00;background:#fff8e1;color:#5a4400}.quote.unchecked[_ngcontent-%COMP%]{border-left-color:#7a8794;background:#f3f5f8;color:#3b4753}"]})};var Z=(e,n)=>n.id;function ct(e,n){if(e&1&&(h(0,"a",3),m(1,"All guide pages"),s()),e&2){let t=a();p("href",t.indexHref,v)}}function ut(e,n){e&1&&(h(0,"p",4),m(1),s()),e&2&&(i(),B('There is no guide page called "',n,'". These are the pages there are.'))}function mt(e,n){if(e&1&&(h(0,"li")(1,"a",7)(2,"b"),m(3),s(),h(4,"span"),m(5),s()()()),e&2){let t=n.$implicit,o=a(2);i(),p("href",o.href(t.id),v),U("data-page",t.id),i(2),k(t.title),i(2),k(t.summary)}}function ft(e,n){if(e&1&&(h(0,"h1"),m(1,"Guide"),s(),u(2,ut,2,1,"p",4),h(3,"p",5),m(4,"How to set the permit system up, and how to use it. It is built into the screens, so it works with no network."),s(),h(5,"ul",6),x(6,mt,6,4,"li",null,Z),s()),e&2){let t,o=a();i(2),f((t=o.unknown())?2:-1,t),i(4),P(o.pages)}}function gt(e,n){if(e&1&&(h(0,"a",13),m(1),s()),e&2){let t=n.$implicit,o=a(2);A("on",t.id===o.page().id),p("href",o.href(t.id),v),i(),k(t.title)}}function wt(e,n){if(e&1&&(h(0,"li")(1,"a",13),m(2),s()()),e&2){let t=n.$implicit,o=a(3);i(),p("href",o.href(o.page().id,t.id),v),i(),k(t.text)}}function yt(e,n){if(e&1&&(h(0,"nav",10)(1,"b"),m(2,"On this page"),s(),h(3,"ul"),x(4,wt,3,2,"li",null,Z),s()()),e&2){let t=a(2);i(4),P(t.contents())}}function kt(e,n){if(e&1&&(h(0,"a",13),m(1),s()),e&2){let t=n,o=a(2);p("href",o.href(t.id),v),i(),B("\u2190 ",t.title,"")}}function bt(e,n){e&1&&q(0,"span")}function vt(e,n){if(e&1&&(h(0,"a",13),m(1),s()),e&2){let t=n,o=a(2);p("href",o.href(t.id),v),i(),B("",t.title," \u2192")}}function _t(e,n){if(e&1&&(h(0,"nav",8),x(1,gt,2,4,"a",9,Z),s(),u(3,yt,6,0,"nav",10),h(4,"article"),q(5,"app-markdown-view",11),s(),h(6,"nav",12),u(7,kt,2,2,"a",13)(8,bt,1,0,"span")(9,vt,2,2,"a",13),s()),e&2){let t,o,r=a();i(),P(r.pages),i(2),f(r.contents().length>1?3:-1),i(2),p("blocks",r.blocks())("page",r.page().id),i(2),f((t=r.previous())?7:8,t),i(2),f((o=r.next())?9:-1,o)}}var W=class e{route=z(ae);router=z(se);host=z(te);pages=R;indexHref="#/guide";params=H(this.route.paramMap,{initialValue:this.route.snapshot.paramMap});fragment=H(this.route.fragment,{initialValue:this.route.snapshot.fragment});name=S(()=>this.params().get("page"));page=S(()=>be(this.name()));unknown=S(()=>this.page()?null:this.name());blocks=S(()=>this.page()?ve(this.page().id):[]);contents=S(()=>X(this.blocks()).filter(n=>n.level===2));previous=S(()=>this.neighbour(-1));next=S(()=>this.neighbour(1));constructor(){oe(()=>{let n=this.fragment();this.page(),setTimeout(()=>this.scroll(n))})}href(n,t){return`#/guide/${n}${t?"#"+t:""}`}back(){window.history.length>1?window.history.back():this.router.navigateByUrl("/")}neighbour(n){let t=this.page();return t?R[R.findIndex(o=>o.id===t.id)+n]??null:null}scroll(n){let t=this.host.nativeElement;((n?t.querySelector("#guide-"+CSS.escape(n)):null)??t).scrollIntoView({block:"start"})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=D({type:e,selectors:[["app-guide"]],decls:7,vars:2,consts:[[1,"page"],[1,"top"],["type","button",1,"back",3,"click"],[1,"all",3,"href"],["role","alert",1,"missing"],[1,"lead"],[1,"pages"],[1,"card",3,"href"],["aria-label","Guide pages",1,"chips"],[3,"href","on"],["aria-label","On this page",1,"contents"],[3,"blocks","page"],["aria-label","Next and previous page",1,"pager"],[3,"href"]],template:function(t,o){if(t&1&&(h(0,"div",0)(1,"div",1)(2,"button",2),ne("click",function(){return o.back()}),m(3,"\u2190 Back"),s(),u(4,ct,2,1,"a",3),s(),u(5,ft,8,1)(6,_t,10,5),s()),t&2){let r;i(4),f((r=o.page())?4:-1,r),i(),f(o.page()?6:5)}},dependencies:[L],styles:["[_nghost-%COMP%]{display:block}.page[_ngcontent-%COMP%]{padding:14px 20px 56px;max-width:820px;margin:0 auto}.top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:8px;font-size:13.5px}.back[_ngcontent-%COMP%]{border:1px solid #c8cfd9;border-radius:7px;background:#fff;padding:5px 12px;font-size:13px;cursor:pointer;color:#223}.all[_ngcontent-%COMP%]{color:#2d6cdf}h1[_ngcontent-%COMP%]{margin:6px 0;font-size:24px}.lead[_ngcontent-%COMP%]{margin:0 0 14px;color:#52606d;font-size:14.5px}.missing[_ngcontent-%COMP%]{margin:8px 0 12px;padding:9px 12px;background:#fff3cd;border:1px solid #e0b000;border-radius:7px;color:#6b5300;font-size:14px}.pages[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}.card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px;padding:12px 15px;border:1px solid #dde3ec;border-radius:10px;background:#fff;text-decoration:none;color:#1f2933}.card[_ngcontent-%COMP%]:hover{border-color:#2d6cdf}.card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:15.5px;color:#1d3a63}.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:#52606d;line-height:1.45}.chips[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap;margin:4px 0 12px}.chips[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:5px 11px;border:1px solid #dde3ec;border-radius:15px;font-size:12.5px;text-decoration:none;color:#445;background:#fff}.chips[_ngcontent-%COMP%]   a.on[_ngcontent-%COMP%]{background:#2d6cdf;border-color:#2d6cdf;color:#fff;font-weight:600}.contents[_ngcontent-%COMP%]{margin:0 0 14px;padding:9px 13px;background:#f6f8fb;border:1px solid #e4e8ee;border-radius:8px;font-size:13.5px}.contents[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:5px 0 0;padding-left:20px;columns:2 220px}.contents[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:2px 0}.contents[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#2d6cdf}.pager[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;margin-top:28px;padding-top:12px;border-top:1px solid #e4e8ee;font-size:14px}.pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#2d6cdf}"]})};var dn=[{path:"",component:W},{path:":page",component:W}];export{dn as guideRoutes};
