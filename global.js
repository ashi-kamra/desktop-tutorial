console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

let pages = [
	{url:"", title:"Home"},
	{url:"projects/index.html", title:"Projects"},
	{url:"contacts/index.html", title:"Contacts"},
	{url:"https://github.com/ashi-kamra?tab=repositories", title:"Github"},
]

let nav = document.createElement("nav");
document.body.prepend(nav)

const ARE_WE_HOME = document.documentElement.classList.contains("home"); //documentElement = root <html> element

for (let p of pages){
	let url = p.url
	let title = p.title
	if (!ARE_WE_HOME && !url.startsWith("http")) {
		url = "../" + url;
	}
	//nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>`);
	let a = document.createElement("a");
	a.href = url;
	a.textContent = title;
	nav.append(a)
	if (a.host === location.host && a.pathname === location.pathname){
		a.classList.add("current");
	} if (a.host !== location.host) { //if external links!
		a.target = "_blank";
	}
}

