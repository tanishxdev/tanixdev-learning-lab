1. let me clarify this first that it is just simple user cookies + state management and data persistance issue 

2. let me reframe the senario with more specificity

- user end to app/website
- got user signed
- user can navigate thru the app w//o refresh bcz : it did change the state
mean

now

- user refresht the paste
- react app assume state chagne and might have thigns like usr update pfg +email+username

- so it try to get latest state after rending
- hit the backend
- once backend send the latest state
- boom! user logged out

why

- bcz in controller we might not store the user in app

- best things we can do is store via localstore

why

bcz it lest costtly for app and perforam incase we store it to the db then we have to go back to db on evry refersh or any minor update rendering

so it increase server and db const

- we need to store user info like login or not if it loged then we mantainer a cookie to hold user as perisenatce

- https is just ro security perpure

- we prefer https > http bcaeause it prvoide securty on refersing the page


how i fix this approch ill take

- creat cookir in browser / redis/ or any fast data flowarchtiure
- then store that cooki into 
- maintain localstorega
- on ever refres we first it the localstore for cookir
if it missd then only we hit the backend db  

