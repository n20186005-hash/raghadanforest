import {
  GROUPS,
  GROUP_ORDER,
  REL_FOOD,
  REL_INSIDE,
  REL_ITIN,
  REL_NEARBY,
  REL_VISIT,
  REL_WEATHER,
  UPDATED_AR,
  UPDATED_EN,
  type Group,
  type Lang,
  type Topic,
  type TopicContent
} from './topics-types';
import { VISIT_TOPICS } from './topics-visits';
import { INSIDE_TOPICS } from './topics-inside';
import { WEATHER_TOPICS } from './topics-weather';
import { FOOD_TOPICS } from './topics-food';
import { NEARBY_TOPICS } from './topics-nearby';
import { ITIN_TOPICS } from './topics-itineraries';

export {
  GROUPS,
  GROUP_ORDER,
  REL_FOOD,
  REL_INSIDE,
  REL_ITIN,
  REL_NEARBY,
  REL_VISIT,
  REL_WEATHER,
  UPDATED_AR,
  UPDATED_EN,
  type Group,
  type Lang,
  type Topic,
  type TopicContent,
  type TopicSection
} from './topics-types';

export const TOPICS: Topic[] = [
  ...VISIT_TOPICS,
  ...INSIDE_TOPICS,
  ...WEATHER_TOPICS,
  ...FOOD_TOPICS,
  ...NEARBY_TOPICS,
  ...ITIN_TOPICS
];

// قائمة كل الروابط الداخلية مرتبة حسب المجموعة (تُستخدم لعنقود الصفحة الرئيسية).
export const GROUP_SLUGS: Record<Group, string[]> = {
  visit: REL_VISIT,
  inside: REL_INSIDE,
  weather: REL_WEATHER,
  food: REL_FOOD,
  nearby: REL_NEARBY,
  itineraries: REL_ITIN
};

export function findTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicContent(topic: Topic, lang: Lang): TopicContent {
  return lang === 'en' ? topic.en : topic.ar;
}

export function groupLabel(group: Group, lang: Lang): string {
  return lang === 'en' ? GROUPS[group].en : GROUPS[group].ar;
}

export interface RelatedLink {
  slug: string;
  title: string;
}

export function relatedLinks(topic: Topic, lang: Lang): RelatedLink[] {
  return topic.related
    .map((slug) => {
      const rel = findTopic(slug);
      return rel ? { slug, title: topicContent(rel, lang).h1 } : null;
    })
    .filter((x): x is RelatedLink => x !== null);
}

export function topicPath(slug: string, lang: Lang): string {
  return lang === 'en' ? `/en/${slug}/` : `/${slug}/`;
}
