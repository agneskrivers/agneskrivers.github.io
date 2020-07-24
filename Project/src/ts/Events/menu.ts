// Function Hande Event
import { handleScrollClickMenu, handleClickMenu } from '../Function/menu';

// DOM Element Menu
const menuHome = <HTMLElement>document.getElementById('menuHome');
const menuAbout = <HTMLElement>document.getElementById('menuAbout');
const menuExperience = <HTMLElement>document.getElementById('menuExperience');
const menuProject = <HTMLElement>document.getElementById('menuProject');
const menuContact = <HTMLElement>document.getElementById('menuContact');

// DOM Element Container
const home = <HTMLElement>document.getElementById('home');
const about = <HTMLElement>document.getElementById('about');
const experience = <HTMLElement>document.getElementById('experience');
const project = <HTMLElement>document.getElementById('project');
const contact = <HTMLElement>document.getElementById('contact');

// Event Listener
menuHome.addEventListener('click', () => {
    handleClickMenu(menuHome);
    handleScrollClickMenu(home);
});
menuAbout.addEventListener('click', () => {
    handleClickMenu(menuAbout);
    handleScrollClickMenu(about);
});
menuExperience.addEventListener('click', () => {
    handleClickMenu(menuExperience);
    handleScrollClickMenu(experience);
});
menuProject.addEventListener('click', () => {
    handleClickMenu(menuProject);
    handleScrollClickMenu(project);
});
menuContact.addEventListener('click', () => {
    handleClickMenu(menuContact);
    handleScrollClickMenu(contact);
});
