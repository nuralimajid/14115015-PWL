let Blogs = [
    {
        "id": 0,
        "judul": "Judul",
        "deskripsi": "Deskripsi Disini",
        "konten": "Isinya apa ya?"
    },
    {
        "id": 1,
        "judul": "Judul1",
        "deskripsi": "Deskripsi Disini",
        "konten": "Isinya apa ya?"
    }
];

let Profile = [
    {
        "name": "Nur Ali Majid",
        "nim": 14115015,
        "about": "mahasiswa IF Matakulaih PWL",
        "github": "https://github.com/majidilkhithar/14115015-PWL"
    }
];

export function allBlog() {
    return Blogs;
}

export function fetchBlog(id) {
    return Blogs.map((data) => {
        if (data.id == id) {
            return data
        }
    })
}

export function Profiles() {
    return Profile;
}