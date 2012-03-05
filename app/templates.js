"use strict";

window.templates || (window.templates = {});

templates.main = function()
{
  return (
  [
    ["div", {"class": "sidepanel"}],
    ["div", {"class": "test-description"}]
  ]);
};

templates.folder_expanded = function(data, path_list)
{
  return (
  ["ul",
    data.dirs.map(this.folder.bind(this, path_list)),
    data.files.map(this.test)]);
};

templates.folder = function(path_list, folder)
{
  for (var i = 0, ch_path; ch_path = path_list[i]; i++)
  {
    if (folder.path.startswith(ch_path + "."))
      break;
  }
  return (
  ["li", 
    {"class": "folder"},
    ["h3", {"data-handler": "expand-collapse",
            "data-path": folder.path},
      ["input", {"type": "checkbox",
                 "data-handler": "add-remove-tests",
                 "checked": ch_path && "checked"}],
      ["input", {"type": "button",
                 "class": "folder-button"}],
      folder.label]]);
};

templates.test = function(test)
{
  return (
  ["li", {"class": "test",
          "data-handler": "show-test",
          "data-id": test.id},
    ["h3", test.label]]);
};

templates.test_description = function(data, path)
{
  return (
  ["div",
    ["h2", data.label],
    ["ol", data.desc.map(this.test_step)],
    ["p", ["a", {"href": data.url}, data.url]]]);
};

templates.test_step = function(step)
{
  return ["li", step]
};

templates.no_xhr = function()
{
  return (
  [["p", "Perhaps XMLHttpRequest is disabled for local host?"],
   ["p", ['a', {"href": "opera:config#UserPrefs|AllowFileXMLHttpRequest"},
                "opera:config#UserPrefs|AllowFileXMLHttpRequest"]]]);
}
