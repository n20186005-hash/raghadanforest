// محتوى مشترك ثنائي اللغة (عربي/إنجليزي) للصفحات الفرعية والنسخة الإنجليزية.
// الحقائق المحايدة (NAP/الإحداثيات/الخريطة) تُستورد من ./site لتبقى مصدراً واحداً.

import { NAP } from './site';

export const photos = {
  entrance: '/images/entrance.webp',
  sign: '/images/sign.webp',
  ridge: '/images/ridge.webp',
  forest: '/images/forest.webp',
  clouds: '/images/clouds.webp'
};

export const mapEmbed =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6672.45030720732!2d41.4332427!3d20.0221476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef4f6655951595%3A0x79af6e771103498b!2sRaghadan%20Forest%20Park!5e1!3m2!1sar!2ssa!4v1787707688232!5m2!1sar!2ssa';

// يحوّل مسار الصفحة الحالية إلى رابط اللغة الأخرى (عربي ↔ إنجليزي).
export function altPair(pathname: string): { ar: string; en: string } {
  const isEn = pathname.startsWith('/en');
  const ar = isEn ? pathname.replace(/^\/en/, '') || '/' : pathname;
  const en = isEn ? pathname : '/en' + (pathname === '/' ? '/' : pathname);
  return { ar, en };
}

type Lang = 'ar' | 'en';

// بناء TouristAttraction (كيان واحد) بلغة معينة.
export function attractionLd(lang: Lang, siteUrl: string) {
  const isAr = lang === 'ar';
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${siteUrl}/#attraction`,
    url: siteUrl,
    name: isAr ? 'غابة رغدان' : 'Raghadan Forest Park',
    alternateName: isAr ? 'منتزه غابة رغدان' : 'Raghadan Forest',
    description: isAr
      ? 'غابة جبلية ومتنزه عام على مرتفعات السروات غرب مدينة الباحة، تشتهر بأشجار العرعر والإطلالات على سهول تهامة والممرات والمساحات الخضراء.'
      : 'A mountain forest and public park on the Sarawat highlands west of Al Bahah, known for juniper trees, overlooks above the Tihamah plains, walking trails and green spaces.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4657 Al Hakam Al ZaroOqi, 6905',
      addressLocality: isAr ? 'الباحة' : 'Al Bahah',
      postalCode: '65731',
      addressCountry: 'SA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: NAP.latitude,
      longitude: NAP.longitude
    },
    isAccessibleForFree: true,
    priceRange: isAr ? 'الدخول العام بلا تذكرة' : 'General entry is free',
    hasMap: NAP.mapsUrl,
    image: [new URL(photos.entrance, siteUrl).href, new URL(photos.sign, siteUrl).href],
    sameAs: [NAP.mapsUrl]
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };
}

// بناء WebPage (صفحة موضوع) بلغة معينة مع رابط الكيان.
export function webPageLd(lang: Lang, siteUrl: string, title: string, description: string, url: string) {
  const isAr = lang === 'ar';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url,
    name: title,
    description,
    inLanguage: isAr ? 'ar' : 'en',
    isPartOf: { '@type': 'WebSite', '@id': `${siteUrl}/#website` },
    about: { '@type': 'TouristAttraction', '@id': `${siteUrl}/#attraction` }
  };
}

// بناء BreadcrumbList لمسار الصفحة الرئيسية ← مجموعة ← موضوع.
export function breadcrumbLd(
  lang: Lang,
  siteUrl: string,
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  };
}


// أسئلة شائعة ثنائية اللغة (نفس المعاني، نص مستقل لكل لغة).
export const faq: Record<Lang, { q: string; a: string }[]> = {
  ar: [
    {
      q: 'هل دخول غابة رغدان يحتاج إلى تذكرة؟',
      a: 'تفيد صفحة «روح السعودية» بأن الدخول العام إلى الغابة لا يحتاج إلى تذكرة. قد تكون لبعض الفعاليات أو الأنشطة والخدمات الموسمية رسوم مستقلة، لذلك تحقّق من الإعلان الرسمي عند وجود فعالية.'
    },
    {
      q: 'ما ساعات فتح غابة رغدان؟',
      a: 'عند المراجعة في 30 أكتوبر 2026، أوردت «روح السعودية» 08:00–00:00، بينما أظهر إدراج خرائط جوجل 14:00–02:00 من اليوم التالي. المصدران مختلفان؛ تحقق من التشغيل والبوابة المقصودة قبل السفر، ولا تفترض إتاحة الزيارة صباحاً أو ليلاً.'
    },
    {
      q: 'هل الغابة مناسبة للعائلات والأطفال؟',
      a: 'نعم؛ تشير بيانات أمانة المنطقة ووكالة الأنباء السعودية إلى مساحات خضراء ومناطق ألعاب وممرات ومقاعد وخدمات عامة. يبقى الإشراف المباشر على الأطفال ضرورياً بسبب طبيعة الموقع الجبلية والحواف والمنحدرات.'
    },
    {
      q: 'هل تتوفر دورات مياه ومواقف سيارات؟',
      a: 'بحسب تقرير واس بتاريخ 13 يونيو 2026، تضم الغابة 122 دورة مياه و1,230 موقفاً للمركبات، منها 42 موقفاً مهيأً لذوي الإعاقة. قد تتغير إتاحة بعض المرافق مؤقتاً بسبب الصيانة أو الازدحام.'
    },
    {
      q: 'ما أفضل وقت لزيارة غابة رغدان؟',
      a: 'اختر زيارة نهارية ضمن ساعات الدخول المؤكدة للإطلالات؛ ولا تضمن تشكل السحب. الصيف أكثر ازدحاماً بسبب اعتدال أجواء الباحة، بينما يتطلب المطر والضباب قيادة ومشياً أكثر حذراً.'
    },
    {
      q: 'كم تستغرق الزيارة؟',
      a: 'للمشاهدة والمشي الهادئ، خصص عادةً من ساعتين إلى أربع ساعات. يمكن أن تمتد الزيارة إلى نصف يوم للعائلات أو للنزهة، بينما تكفي زيارة أقصر لمن يريد الإطلالة والتصوير فقط.'
    },
    {
      q: 'هل يمكن الوصول إلى الغابة بالحافلة؟',
      a: 'لا ينبغي الاعتماد على وجود خط حافلات ثابت يصل مباشرة إلى بوابة الغابة دون تحقق مسبق. يمكن الوصول إلى مدينة الباحة بوسائل نقل مختلفة، ثم إكمال الجزء الأخير بسيارة أو سيارة أجرة وفق الخدمة المتاحة وقت الرحلة.'
    },
    {
      q: 'هل ظهور الضباب مضمون؟',
      a: 'لا. الضباب والسحب المنخفضة من ملامح المشهد الشهيرة في رغدان، لكنها ظواهر جوية تتغير من ساعة إلى أخرى. لا تبنِ خطة الزيارة على ضمان ظهورها.'
    },
    {
      q: 'هل الموقع مناسب للكراسي المتحركة؟',
      a: 'توجد مواقف مخصصة لذوي الإعاقة وبعض المسارات والخدمات المطورة، لكن طبيعة الغابة جبلية وفيها فروق ارتفاع. راجع المسار المقصود عند الوصول، وفضّل المناطق المعبدة إذا كانت الحركة محدودة.'
    }
  ],
  en: [
    {
      q: 'Does entry to Raghadan Forest need a ticket?',
      a: 'Visit Saudi ("Roh Al Saudi") states that general entry to the forest does not require a ticket. Some seasonal events or optional commercial activities and services may carry separate fees, so check the official announcement when an event is running.'
    },
    {
      q: 'What are Raghadan Forest opening hours?',
      a: 'Checked on 30 October 2026: Visit Saudi lists 08:00–00:00, while the Google Maps listing shows 14:00–02:00 the following day. These sources conflict. Confirm access and the intended gate before traveling; do not assume morning or late-night entry.'
    },
    {
      q: 'Is the forest suitable for families and children?',
      a: 'Yes. Data from the Al Bahah municipality and the Saudi Press Agency point to green spaces, playgrounds, trails, seating and public services. Direct supervision of children remains essential because of the mountainous terrain, edges and slopes.'
    },
    {
      q: 'Are restrooms and parking available?',
      a: 'According to the Saudi Press Agency report of 13 June 2026, the forest has 122 restrooms and 1,230 vehicle parking spaces, including 42 spaces adapted for people with disabilities. Availability of some facilities may change temporarily due to maintenance or crowding.'
    },
    {
      q: 'What is the best time to visit Raghadan Forest?',
      a: 'Choose a daylight visit within confirmed opening hours for the overlooks; clouds remain unpredictable. Summer is busier because Al Bahah weather is mild, whereas rain and fog call for more careful driving and walking.'
    },
    {
      q: 'How long does a visit take?',
      a: 'For sightseeing and relaxed walking, plan usually two to four hours. A family or picnic visit can extend to half a day, while a shorter stop is enough for those who only want the view and photos.'
    },
    {
      q: 'Can I reach the forest by bus?',
      a: 'Do not assume a fixed bus line goes directly to the forest gate without checking first. You can reach Al Bahah city by various transport, then complete the final leg by car or taxi depending on the service available at travel time.'
    },
    {
      q: 'Is fog guaranteed to appear?',
      a: 'No. Low clouds and fog are famous features of the Raghadan scenery, but they are weather phenomena that shift hour to hour. Do not build your plan on a guaranteed appearance.'
    },
    {
      q: 'Is the site suitable for wheelchairs?',
      a: 'There are designated disabled parking bays and some developed, paved paths and services, but the forest is mountainous with elevation changes. Check the intended trail on arrival and prefer paved areas if mobility is limited.'
    }
  ]
};
