'use strict';

// helpers
  /**
   * gets the first node with said id
   * @param {string} id - the id that the node has
   * @return {node} the first node with the id
   */
export function id(id) {
    return document.getElementById(id);
  }

  /**
   * gets the first node with said id / class / tagname
   * @param {node} target - the source node to be searched
   * @param {string} selector - the id / class / tagname that the node has
   * @return {node} the first node with the selector
   */
export function qs(target, selector) {
    return target.querySelector(selector);
  }

  /**
   * gets all the node withs said id / class / tagname
   * @param {node} target - the source node to be searched
   * @param {string} tagname - the id / class / tagname that the node has
   * @return {node[]} the array of nodes node with the selector
   */
export function qsa(target, tagname) {
    return target.querySelectorAll(tagname);
  }

  /**
   * gets all the nodes with said id / class / tagname
   * @param {string} tagName - the id / class / tagname that the nodes have in common
   * @return {node[]} all of the nodes with the tagname
   */
export function gen(tagName) {
    return document.createElement(tagName);
  }

