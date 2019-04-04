"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;
function index(req, res) {
  //TODO find all tasks
  return res.status(200).json();
}

function create(req, res) {
  //TODO create task
  return res.status(201).json();
}

function update(req, res) {
  //TODO update task
  return res.status(204).json();
}

function remove(req, res) {
  //TODO remove task
  return res.status(204).json();
}

function show(req, res) {
  //TODO show task
  return res.status(200).json();
}