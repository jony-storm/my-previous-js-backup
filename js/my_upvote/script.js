const submissions = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 16,
    avatar: 'daniel.jpg',
    submissionImage: 'image-yellow.png',
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: 11,
    avatar: 'kristy.png',
    submissionImage: 'image-rose.png',
  },
  {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We have your measurements and shipping address.',
    url: '#',
    votes: 17,
    avatar: 'veronika.jpg',
    submissionImage: 'image-steel.png',
  },
  {
    id: 4,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    url: '#',
    votes: 9,
    avatar: 'molly.png',
    submissionImage: 'image-aqua.png',
  }
];

submissions.sort((a, b) => { return b.votes - a.votes})

var container = document.querySelector(".container")
var len = submissions.length

for(let i = 0; i < len; i++) {
  let collector = document.createElement("div")
  let img = document.createElement("img")
  let info = document.createElement("div")
  let a = document.createElement("a")
  let para = document.createElement("p")
  let small = document.createElement("small")
  let sub_img = document.createElement("img")
  let vote = document.createElement("div")
  let icon = document.createElement("i")

  collector.setAttribute("class", "collector")
  img.setAttribute("src", submissions[i].submissionImage)
  img.setAttribute("class", "img")
  sub_img.setAttribute("src", submissions[i].avatar)
  sub_img.setAttribute("class", "sub_img")
  info.setAttribute("class", "info")
  a.setAttribute("class", "header")
  a.setAttribute("href", submissions[i].url)
  para.setAttribute("class", "para")
  small.setAttribute("class", "submitted")
  vote.setAttribute("class", "increase_vote")
  icon.setAttribute("class", "fa fa-chevron-up")



  container.appendChild(collector)
  collector.appendChild(img)
  collector.appendChild(info)
  info.appendChild(a)
  info.appendChild(para)
  info.appendChild(small)
  collector.appendChild(vote)
  vote.appendChild(icon)


  a.innerHTML = submissions[i].title + "<small><strong>#" +  submissions[i].id + "</strong></small>"
  para.innerHTML = submissions[i].description
  small.innerHTML = "Submitted by: "  
  small.appendChild(sub_img)
  vote.innerHTML += submissions[i].votes

}