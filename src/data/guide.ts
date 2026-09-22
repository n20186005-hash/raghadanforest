// محتوى مشترك ثنائي اللغة (عربي/إنجليزي) للصفحات الفرعية والنسخة الإنجليزية.
// الحقائق المحايدة (NAP/الإحداثيات/الخريطة) تُستورد من ./site لتبقى مصدراً واحداً.

import { NAP } from './site';

export const photos = {
  entrance: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/%D9%85%D9%86%D8%AA%D8%B2%D9%87_%D8%BA%D8%A7%D8%A8%D8%A9_%D8%B1%D8%BA%D8%AF%D8%A7%D9%861W9828.jpg',
  sign: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Welcome_Sign_-_Raghdan_Forest_1.jpg',
  ridge: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Albaha9021_-_1.jpeg',
  forest: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Albaha9021_-_2.jpeg',
  clouds: 'https://upload.wikimedia.org/wikipedia/commons/4/46/%D8%A7%D9%84%D8%A8%D8%A7%D8%AD%D8%A9_-_1.jpeg'
};

export const mapEmbed =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6672.45030720732!2d41.4334279!3d20.0220551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef4f6655951595%3A0x79af6e771103498b!2sRaghadan%20Forest%20Park!5e1!3m2!1sar!2ssa!4v1787707688232!5m2!1sar!2ssa';

// يحوّل مسار الصفحة الحالية إلى رابط اللغة الأخرى (عربي ↔ إنجليزي).
export function altPair(pathname: string): { ar: string; en: string } {
  const isEn = pathname.startsWith('/en');
  const ar = isEn ? pathname.replace(/^\/en/, '') || '/' : pathname;
  const en = isEn ? pathname : '/en' + (pathname === '/' ? '/' : pathname);
  return { ar, en };
}

type Lang = 'ar' | 'en';

// بناء TouristAttraction + LocalBusiness (كيان واحد) بلغة معينة.
export function attractionLd(lang: Lang, siteUrl: string) {
  const isAr = lang === 'ar';
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '23:59'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.4,
      reviewCount: 40771,
      bestRating: 5
    },
    isAccessibleForFree: true,
    priceRange: isAr ? 'الدخول العام بلا تذكرة' : 'General entry is free',
    hasMap: NAP.mapsUrl,
    image: [photos.entrance, photos.ridge, photos.clouds],
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

// أسئلة شائعة ثنائية اللغة (نفس المعاني، نص مستقل لكل لغة).
export const faq: Record<Lang, { q: string; a: string }[]> = {
  ar: [
    {
      q: 'هل دخول غابة رغدان يحتاج إلى تذكرة؟',
      a: 'تفيد صفحة «روح السعودية» بأن الدخول العام إلى الغابة لا يحتاج إلى تذكرة. قد تكون لبعض الفعاليات أو الأنشطة والخدمات الموسمية رسوم مستقلة، لذلك تحقّق من الإعلان الرسمي عند وجود فعالية.'
    },
    {
      q: 'ما ساعات فتح غابة رغدان؟',
      a: 'تورد «روح السعودية» ساعات يومية من 8:00 صباحاً حتى 11:59 مساءً. لأن التشغيل قد يتغير في المواسم أو بسبب الطقس والصيانة، يُفضّل التحقق من القنوات الرسمية قبل الرحلة.'
    },
    {
      q: 'هل الغابة مناسبة للعائلات والأطفال؟',
      a: 'نعم؛ تشير بيانات أمانة المنطقة ووكالة الأنباء السعودية إلى مساحات خضراء ومناطق ألعاب وممرات ومقاعد وخدمات عامة. يبقى الإشراف المباشر على الأطفال ضرورياً بسبب طبيعة الموقع الجبلية والحواف والمنحدرات.'
    },
    {
      q: 'هل تتوفر دورات مياه ومواقف سيارات؟',
      a: 'بحسب بيانات منشورة في 2026، تضم الغابة 122 دورة مياه و1,230 موقفاً للمركبات، منها 42 موقفاً مهيأً لذوي الإعاقة. قد تتغير إتاحة بعض المرافق مؤقتاً بسبب الصيانة أو الازدحام.'
    },
    {
      q: 'ما أفضل وقت لزيارة غابة رغدان؟',
      a: 'الصباح الباكر مناسب للأجواء الهادئة وفرصة مشاهدة السحب إن تكوّنت، والعصر إلى ما قبل الغروب مناسب للإطلالات. الصيف أكثر ازدحاماً بسبب اعتدال أجواء الباحة، بينما يتطلب المطر والضباب قيادة ومشياً أكثر حذراً.'
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
      a: 'Visit Saudi lists daily hours from 8:00 AM to 11:59 PM. Operations can change by season, weather, or maintenance, so it is best to verify via official channels before traveling.'
    },
    {
      q: 'Is the forest suitable for families and children?',
      a: 'Yes. Data from the Al Bahah municipality and the Saudi Press Agency point to green spaces, playgrounds, trails, seating and public services. Direct supervision of children remains essential because of the mountainous terrain, edges and slopes.'
    },
    {
      q: 'Are restrooms and parking available?',
      a: 'According to 2026 published data, the forest has 122 restrooms and 1,230 vehicle parking spaces, including 42 spaces adapted for people with disabilities. Availability of some facilities may change temporarily due to maintenance or crowding.'
    },
    {
      q: 'What is the best time to visit Raghadan Forest?',
      a: 'Early morning suits the calm atmosphere and a chance of cloud formation, while afternoon until before sunset is good for the overlooks. Summer is busier because Al Bahah weather is mild, whereas rain and fog call for more careful driving and walking.'
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
