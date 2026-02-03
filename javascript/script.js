// All JavaScript in one file

const newsItems = [
  {
    title: "Tech stocks surge amid AI growth",
    subtitle: "Markets react to new developments in artificial intelligence",
    source: "r/technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
  },
  {
    title: "Climate summit reaches agreement",
    subtitle: "World leaders commit to carbon reduction targets",
    source: "r/worldnews",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=400&q=80",
  },
  {
    title: "New gaming console announced",
    subtitle: "Next-gen hardware promises 8K gaming experience",
    source: "r/gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80",
  },
  {
    title: "Scientists make breakthrough",
    subtitle: "Revolutionary discovery in quantum computing",
    source: "r/science",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&q=80",
  },
];


const popularCommunities = [
  { name: "r/AskMen", members: "7,143,843", icon: "👨", color: "#2563eb" },
  { name: "r/AskWomen", members: "5,617,178", icon: "👩", color: "#ec4899" },
  { name: "r/PS4", members: "5,514,497", icon: "🎮", color: "#1d4ed8" },
  { name: "r/apple", members: "6,311,621", icon: "🍎", color: "#4b5563" },
  { name: "r/NBA2k", members: "740,205", icon: "🏀", color: "#f97316" },
];


const posts = [
  {
    id: 1,
    subreddit: "SloveniaFIRE",
    subredditIcon: "🇸🇮",
    author: "user123",
    timeAgo: "23 hr. ago",
    title: "Kaj je slovenski ekvivalent six figures oziroma 100k plači?",
    content: "V ameriški kulturi je pogosto slišati \"he/she earns six figures\" kot neka prelomnica, ko se lahko reče, da ima nekdo dobro plačo oziroma da je well off. Kaj bi bil ekvivalent tega v Sloveniji? Jaz bi rekel tam nekje 3k neto mesečno. Pa vi?",
    upvotes: 56,
    comments: 52,
    popularIn: "your country",
  },
  {
    id: 2,
    subreddit: "SlimQ-Official",
    subredditIcon: "⚡",
    author: "SlimQ-Official",
    timeAgo: "",
    title: "Tired of bulky chargers? SlimQ delivers 330w to any laptop. Shop Now for universal power.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    upvotes: 0,
    comments: 716,
    isPromoted: true,
    showJoin: false,
  },
  {
    id: 3,
    subreddit: "PeterExplainsTheJoke",
    subredditIcon: "🅿️",
    author: "joke_explainer",
    timeAgo: "22 hr. ago",
    title: "Help me Peter, I'm not that close to get it",
    content: "",
    upvotes: 8900,
    comments: 567,
    popularIn: "your country",
  },
  {
    id: 4,
    subreddit: "technology",
    subredditIcon: "💻",
    author: "tech_news",
    timeAgo: "5h",
    title: "OpenAI announces GPT-5 with revolutionary reasoning capabilities",
    content: "The new model shows unprecedented performance on complex reasoning tasks, marking a significant leap in AI capabilities.",
    upvotes: 24500,
    comments: 3420,
    popularIn: "Technology",
  },
  {
    id: 5,
    subreddit: "pics",
    subredditIcon: "📷",
    author: "nature_lover",
    timeAgo: "8h",
    title: "Captured this amazing sunset at Grand Canyon last week",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&q=80",
    upvotes: 45200,
    comments: 892,
  },
  {
    id: 6,
    subreddit: "todayilearned",
    subredditIcon: "💡",
    author: "curious_mind",
    timeAgo: "12h",
    title: "TIL that octopuses have three hearts and blue blood",
    content: "Two branchial hearts pump blood to the gills, while a third heart pumps it to the rest of the body.",
    upvotes: 32100,
    comments: 1240,
  },
  {
    id: 7,
    subreddit: "gaming",
    subredditIcon: "🎮",
    author: "gamer_pro",
    timeAgo: "3h",
    title: "After 500 hours, I finally completed this game on the hardest difficulty",
    content: "What a journey! The final boss took me 47 attempts, but I finally did it.",
    upvotes: 15600,
    comments: 890,
  },
  {
    id: 8,
    subreddit: "worldnews",
    subredditIcon: "🌍",
    author: "news_reporter",
    timeAgo: "1h",
    title: "Climate summit reaches historic agreement on carbon emissions reduction targets",
    content: "World leaders have agreed to ambitious new targets for reducing carbon emissions by 2035.",
    upvotes: 9800,
    comments: 2340,
    popularIn: "World News",
  },
];


const voteStates = {};

posts.forEach(post => {
  voteStates[post.id] = { state: null, currentVotes: post.upvotes };
});


function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}


let sidebarOpen = true;
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebarOpen = !sidebarOpen;
  if (sidebarOpen) {
    sidebar.classList.remove('collapsed');
  } else {
    sidebar.classList.add('collapsed');
  }
}


function toggleSection(sectionId) {
  const header = document.querySelector(`[data-section="${sectionId}"]`);
  const content = document.getElementById(sectionId);

  header.classList.toggle('collapsed');
  content.classList.toggle('hidden');
}


function scrollNews() {
  const container = document.querySelector('.news-carousel-inner');
  container.scrollBy({ left: 220, behavior: 'smooth' });
}


function handleUpvote(postId, event) {
  event.stopPropagation();
  const post = posts.find(p => p.id === postId);
  const voteState = voteStates[postId];

  if (voteState.state === 'up') {
    voteState.state = null;
    voteState.currentVotes = post.upvotes;
  } else {
    voteState.state = 'up';
    voteState.currentVotes = post.upvotes + 1;
  }

  updatePostVotes(postId);
}


function handleDownvote(postId, event) {
  event.stopPropagation();
  const post = posts.find(p => p.id === postId);
  const voteState = voteStates[postId];

  if (voteState.state === 'down') {
    voteState.state = null;
    voteState.currentVotes = post.upvotes;
  } else {
    voteState.state = 'down';
    voteState.currentVotes = post.upvotes - 1;
  }

  updatePostVotes(postId);
}


function updatePostVotes(postId) {
  const voteState = voteStates[postId];
  const upvoteBtn = document.querySelector(`#post-${postId} .upvote-btn`);
  const downvoteBtn = document.querySelector(`#post-${postId} .downvote-btn`);
  const voteCount = document.querySelector(`#post-${postId} .vote-count`);

  upvoteBtn.classList.remove('upvoted');
  downvoteBtn.classList.remove('downvoted');
  voteCount.classList.remove('upvoted', 'downvoted');

  if (voteState.state === 'up') {
    upvoteBtn.classList.add('upvoted');
    voteCount.classList.add('upvoted');
  } else if (voteState.state === 'down') {
    downvoteBtn.classList.add('downvoted');
    voteCount.classList.add('downvoted');
  }

  voteCount.textContent = formatNumber(voteState.currentVotes);
}


function renderNews() {
  const container = document.getElementById('news-container');

  container.innerHTML = newsItems.map(news => `
    <div class="news-card">
      <img class="news-card-image" src="${news.image}" alt="${news.title}">
      <div class="news-card-overlay"></div>
      <div class="news-card-content">
        <h3 class="news-card-title">${news.title}</h3>
        <p class="news-card-subtitle">${news.subtitle}</p>
        <div class="news-card-source">
          <div class="news-source-icon">📰</div>
          <span class="news-source-name">${news.source}</span>
          <span class="news-source-more">and more</span>
        </div>
      </div>
    </div>
  `).join('');
}


function renderCommunities() {
  const container = document.getElementById('communities-list');

  container.innerHTML = popularCommunities.map(community => `
    <div class="community-item">
      <div class="community-item-icon" style="background-color: ${community.color}">
        ${community.icon}
      </div>
      <div class="community-item-info">
        <p class="community-item-name">${community.name}</p>
        <p class="community-item-members">${community.members} members</p>
      </div>
    </div>
  `).join('');
}


function renderPosts() {
  const container = document.getElementById('posts-container');

  container.innerHTML = posts.map(post => `
    <article class="post-card" id="post-${post.id}">
      <div class="post-header">
        <div class="post-meta">
          <div class="subreddit-icon">${post.subredditIcon}</div>
          <span class="subreddit-name">r/${post.subreddit}</span>
          <span class="post-dot">•</span>
          <span class="post-time">${post.timeAgo}</span>
          ${post.popularIn ? `<span class="post-dot">•</span><span class="post-popular">Popular in ${post.popularIn}</span>` : ''}
          ${post.isPromoted ? `<span class="post-dot">•</span><span class="post-promoted">Promoted</span>` : ''}
        </div>
        <div class="post-header-actions">
          ${post.showJoin !== false ? '<button class="join-btn">Join</button>' : ''}
          <button class="more-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
      </div>
      
      <h3 class="post-title">${post.title}</h3>
      
      ${post.content ? `<p class="post-content">${post.content}</p>` : ''}
      
      ${post.image ? `<div class="post-image"><img src="${post.image}" alt="${post.title}"></div>` : ''}
      
      <div class="post-actions">
        <div class="vote-container">
          <button class="vote-btn upvote-btn" onclick="handleUpvote(${post.id}, event)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 19V6M5 12l7-7 7 7"/>
            </svg>
          </button>
          <span class="vote-count">${formatNumber(post.upvotes)}</span>
          <button class="vote-btn vote-btn downvote downvote-btn" onclick="handleDownvote(${post.id}, event)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v13M5 12l7 7 7-7"/>
            </svg>
          </button>
        </div>
        
        <button class="action-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          ${formatNumber(post.comments)}
        </button>
        
        <button class="action-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          Share
        </button>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderNews();
  renderCommunities();
  renderPosts();
  drawRedditLogo();
});
