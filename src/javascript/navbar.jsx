'use strict';
import * as help from './helper.js'

function createListElement(tag) {
  let listElem = help.gen('li');
  listElem.classList.add('nav-item');
  let item = help.gen('');
}

export function createNavBar(current) {
  let navBar = help.gen("nav");
  navBar.classList.add("navbar");
  navBar.classList.add("navbar-expand-lg");
  let contentDiv = help.gen('div');
  contentDiv.classList.add('container-fluid');
  contentDiv.add()
}