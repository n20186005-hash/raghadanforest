// أنواع البيانات المشتركة لنظام المواضيع الطويلة (40 موضوعاً ثنائي اللغة).
// الحقائق المحايدة تُستورد من ./site عند الحاجة داخل محتوى المواضيع.

export type Lang = 'ar' | 'en';
export type Group = 'visit' | 'inside' | 'weather' | 'food' | 'nearby' | 'itineraries';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface TopicContent {
  h1: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faqs: { q: string; a: string }[];
}

export interface Topic {
  group: Group;
  slug: string;
  ar: TopicContent;
  en: TopicContent;
  related: string[];
}

// ترتيب المجموعات في صفحة العنقود والروابط.
export const GROUP_ORDER: Group[] = ['visit', 'inside', 'weather', 'food', 'nearby', 'itineraries'];

export const GROUPS: Record<Group, { ar: string; en: string }> = {
  visit: { ar: 'التخطيط للزيارة', en: 'Visit planning' },
  inside: { ar: 'داخل الغابة', en: 'Inside the forest' },
  weather: { ar: 'الطقس والضباب', en: 'Weather & fog' },
  food: { ar: 'الطعام والتموين', en: 'Food & supplies' },
  nearby: { ar: 'أماكن قريبة', en: 'Nearby places' },
  itineraries: { ar: 'مسارات مقترحة', en: 'Suggested itineraries' }
};

// تاريخ آخر مراجعة معروض في صفحات المواضيع.
export const UPDATED_AR = '30 أكتوبر 2026';
export const UPDATED_EN = '30 Oct 2026';

// قوائم الروابط الداخلية لكل مجموعة (تُستخدم لبناء عنقود الموضوعات).
export const REL_VISIT = [
  'opening-hours',
  'parking',
  'duration',
  'with-kids',
  'accessibility',
  'restrooms-prayer',
  'from-airport',
  'taxi-return',
  'crowds'
];

export const REL_INSIDE = [
  'al-ghaym-walkway',
  'lavender-walkway',
  'bahjat-raghadan',
  'zipline',
  'suspension-bridge',
  'viewpoints',
  'waterfalls',
  'night-lights',
  'juniper-nature',
  'photography',
  'picnic'
];

export const REL_WEATHER = ['fog', 'best-time', 'summer', 'winter', 'sunset'];

export const REL_FOOD = ['restaurants', 'cafes', 'family-meals', 'quick-bites', 'supplies'];

export const REL_NEARBY = [
  'prince-hussam-park',
  'prince-mohammed-park',
  'al-shafa-highlands',
  'al-khairah-forest',
  'dhee-ayn-village'
];

export const REL_ITIN = [
  'two-hours',
  'half-day-family',
  'evening-coffee',
  'one-day-al-baha',
  'nature-heritage'
];
