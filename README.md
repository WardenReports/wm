# Work Manager
Work Manager is a Tool by Warden to Help Keep Your Employee's Work As Their Main Focus.

# How To Customize

## Step 1:
Find the domains of all the websites you would like to whitelist.

Make Sure They Are In This Format:
(subdomain).(domain).(ending)

## Step 2:
Open The Content.js Folder In The Work Manager File.

Locate This Text:
switch (window.location.hostname) {
https://imgur.com/a/zpHXtul.png

## Step 3:
Directly Below The switch function, paste this code: (Make sure to update {domain} to your domain you would like to whitelist)
    
    case "{domain}":  

    // history.back()
    // window.open("https://sites.google.com/view/wardenblockedpage/work");

    break;
    
##Finish
Congratulations, You Are Done! Just Upload To Chrome.
