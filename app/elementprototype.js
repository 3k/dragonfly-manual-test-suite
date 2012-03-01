Element.prototype.append_tmpl = function(tmpl)
{
  var ELE_NAME = 0;
  var ATTRS = 1;
  var ele = null;
  var i = 0;
  if (typeof tmpl[ELE_NAME] == "string")
  {
    i++;
    ele = document.createElement(tmpl[ELE_NAME]);
    if (Object.prototype.toString.call(tmpl[ATTRS]) == "[object Object]")
    {
      i++;
      var attrs = tmpl[ATTRS];
      if (attrs)
      {
        for (var prop in attrs)
        {
          if (typeof attrs[prop] == "string")
            ele.setAttribute(prop, attrs[prop]);
        }
      }
    }
  }
  for (; i < tmpl.length; i++)
  {
    if (typeof tmpl[i] == "string")
      ele.appendChild(document.createTextNode(tmpl[i]))
    else
      (ele || this).append_tmpl(tmpl[i]);
  }
  if (ele)
    this.appendChild(ele);
};