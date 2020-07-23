const content_list = document.querySelectorAll('.content-list');

for (let i = 0; i < list.length; i++) {
    const category = list[i];
    category.forEach(item => {
        const link = document.createElement("a");
        link.href = item.link;
        link.innerText = item.title;

        content_list[i].appendChild(link);
    });
}