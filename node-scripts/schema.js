// We don't necessarily need to add every field here, since
// Gatsby will auto-generate the fields when created. This is
// just to make sure that certain fields are set to certain types.
exports.schema = `

interface VideoInterface implements Node {
  id: ID!
  title: String!
  slug: String!
  videoId: String!
  description: String!
  date: String
  videoNumber: String
  topics: [String!]
  languages: [String!]
  timestamps: [Timestamp!]
  codeExamples: [CodeExample!] 
  canContribute: Boolean!
  contributions: [Contribution!] @link
  relatedJourneys: [Journey!] @link
  cover: CoverImage @link
  groupLinks: [GroupLink!]
  source: String!
}

type Video implements VideoInterface & Node {
  id: ID!
  title: String!
  slug: String!
  videoId: String!
  description: String!
  date: String
  videoNumber: String
  topics: [String!]
  languages: [String!]
  timestamps: [Timestamp!]
  codeExamples: [CodeExample!] 
  canContribute: Boolean!
  contributions: [Contribution!] @link
  relatedJourneys: [Journey!] @link
  cover: CoverImage @link
  groupLinks: [GroupLink!]
  source: String!
}

type Journey implements VideoInterface & Node {
  id: ID!
  title: String!
  slug: String!
  videoId: String!
  description: String!
  date: String
  videoNumber: String
  topics: [String!]
  languages: [String!]
  timestamps: [Timestamp!]
  codeExamples: [CodeExample!] 
  canContribute: Boolean!
  contributions: [Contribution!] @link
  relatedJourneys: [Journey!] @link
  cover: CoverImage @link
  groupLinks: [GroupLink!]
  source: String!
}

type GuestTutorial implements VideoInterface & Node {
  id: ID!
  title: String!
  slug: String!
  videoId: String!
  description: String!
  date: String
  videoNumber: String
  topics: [String!]
  languages: [String!]
  timestamps: [Timestamp!]
  codeExamples: [CodeExample!] 
  canContribute: Boolean!
  contributions: [Contribution!] @link
  relatedJourneys: [Journey!] @link
  cover: CoverImage @link
  groupLinks: [GroupLink!]
  source: String!
}

type Contribution implements Node {
  title: String!
  name: String!
  author: Author!
  url: String
  videoId: String
  source: String
  video: Video! @link
  cover: CoverImage @link
}

type Timestamp implements Node {
  title: String!
  time: String!
  seconds: Int!
}

type GroupLink implements Node {
  title: String!
  links: [Link!]!
}

type Link implements Node {
  title: String!
  url: String!
  author: String
}

type CodeExample implements Node {
  title: String!
  language: String
  codeUrl: String!
  githubUrl: String!
  editorUrl: String
}

type Author implements Node {
  name: String!
  url: String
}

type Chapter implements Node {
  title: String
  videos: [VideoInterface] @link
}

type Track implements Node {
  title: String!
  slug: String!
  type: String!
  description: String!
  chapters: [Chapter] @link
  videos: [VideoInterface] @link
  cover: CoverImage @link
  numVideos: Int!
}

type Talk implements Node {
  title: String!
  slug: String!
  description: String!
  meta: String!
  link: String
  cover: CoverImage @link
}

type Collaborator implements Node {
  name: String!
  type: String!
  url: String
} 

type CoverImage implements Node {
  id: ID!
  file: File! @link
}
`;