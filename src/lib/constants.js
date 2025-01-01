import { GithubIcon, LinkedinIcon, Home, YoutubeIcon } from 'lucide-react'

export const PROFILES = {
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aliirani',
    icon: <LinkedinIcon size={16} />
  },
  youtube: {
    title: 'YouTube',
    url: 'https://www.youtube.com/@aliir74',
    icon: <YoutubeIcon size={16} />
  },
  github: {
    title: 'GitHub',
    url: 'https://github.com/aliir74',
    icon: <GithubIcon size={16} />
  },
  telegram: {
    title: 'Telegram',
    url: 'https://t.me/+3CqRmaAHDj5lOTE0',
    icon: (
      <svg width="16px" height="16px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5 1.5L0.5 6.5L4.5 8.5L10.5 4.5L6.5 9.5L12.5 13.5L14.5 1.5Z"
          stroke="#000000"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
}

export const TWEETS_COLLECTION_ID = 15896982

export const COLLECTION_IDS = [
  18259129,
  15968768,
  23598938,
  16949672,
  15807896,
  15807897,
  15969648,
  16338467,
  TWEETS_COLLECTION_ID,
  25589709,
  17139082,
  22029101,
  39696243
]

export const LINKS = [
  {
    href: '/',
    label: 'Home',
    icon: <Home size={16} />
  }
  // {
  //   href: '/writing',
  //   label: 'Writing',
  //   icon: <PencilLineIcon size={16} />
  // },
  // {
  //   href: '/journey',
  //   label: 'Journey',
  //   icon: <NavigationIcon size={16} />
  // },
  // {
  //   href: '/stack',
  //   label: 'Stack',
  //   icon: <Wand2Icon size={16} />
  // },
  // {
  //   href: '/workspace',
  //   label: 'Workspace',
  //   icon: <ArmchairIcon size={16} />
  // },
  // {
  //   href: '/bookmarks',
  //   label: 'Bookmarks',
  //   icon: <BookmarkIcon size={16} />
  // }
]

export const WORKSPACE_ITEMS = []

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
export const SUPABASE_TABLE_NAME = 'pages'

export const SUBMIT_BOOKMARK_FORM_TITLE = 'Submit a bookmark'
export const SUBMIT_BOOKMARK_FORM_DESCRIPTION =
  "Send me a website you like and if I like it too, you'll see it in the bookmarks list. With respect, please do not submit more than 5 websites a day."
export const MAX_BOOKMARK_SUBMISSIONS_PER_DAY = 5
export const BOOKMARK_SUBMISSION_COUNT_COOKIE_NAME = 'formSubmissionCount'

export const CONTENT_TYPES = {
  PAGE: 'page',
  POST: 'post',
  LOGBOOK: 'logbook'
}
