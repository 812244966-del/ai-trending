export type ThoughtStatus = "active" | "archived" | "trash";

export type Thought = {
  id: string;
  content: string;
  status: ThoughtStatus;
  createdAt: string;
  updatedAt: string;
};

export type Device = {
  id: string;
  deviceToken: string;
  timezone: string | null;
  locale: string | null;
  createdAt: string;
  lastSeenAt: string;
};

export type DailyPlayback = {
  id: string;
  playbackDate: string;
  summary: string;
  themes: string[];
  sourceThoughtIds: string[];
  createdAt: string;
};
