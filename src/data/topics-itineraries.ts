import type { Topic } from './topics-types';
import { UPDATED_AR, UPDATED_EN } from './topics-types';

export const ITIN_TOPICS: Topic[] = [
  {
    group: 'itineraries',
    slug: 'two-hours',
    related: ['duration', 'viewpoints', 'photography', 'al-ghaym-walkway', 'picnic'],
    ar: {
      h1: 'مسار ساعتين في غابة رغدان',
      lead: 'زيارة قصيرة للمشاهدة والمشي الهادئ والتصوير عند المطلات. تأكد أولاً من ساعات الدخول قبل الحساب.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'اقتراح',
          paragraphs: [
            'إن كنت على عجلة، خصص ساعتين: الوصول قرب المواقف المطورة، مشي هادئ عند المطلات الآمنة، ثم فترة تصوير قصيرة. هذا يكفي للمشاهدة لكنه لا يشمل اللعب أو النزهة.'
          ]
        },
        {
          heading: 'ترتيب مقترح',
          bullets: [
            '15 دقيقة: الوصول والمواقف.',
            '60 دقيقة: مشي هادئ عند المطلات المهيأة.',
            '45 دقيقة: تصوير وفترة راحة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل ساعتان تكفيان؟',
          a: 'نعم للمشاهدة والمشي الهادئ والتصوير. لا تشمل اللعب أو النزهة؛ تأكد من ساعات الدخول أولاً.'
        }
      ]
    },
    en: {
      h1: 'A two-hour route at Raghadan Forest',
      lead: 'A short visit for sightseeing, relaxed walking and photos at overlooks. Confirm entry hours first before planning the timing.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Suggestion',
          paragraphs: [
            'If pressed for time, plan two hours: arrive near the developed parking, a relaxed walk at safe overlooks, then a short photo stop. This suits sightseeing but excludes play or picnic.'
          ]
        },
        {
          heading: 'Proposed order',
          bullets: [
            '15 min: arrival and parking.',
            '60 min: relaxed walk at prepared overlooks.',
            '45 min: photos and a rest.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are two hours enough?',
          a: 'Yes for sightseeing, relaxed walking and photos. It excludes play or picnic; confirm entry hours first.'
        }
      ]
    }
  },
  {
    group: 'itineraries',
    slug: 'half-day-family',
    related: ['with-kids', 'duration', 'picnic', 'viewpoints', 'family-meals'],
    ar: {
      h1: 'نصف يوم عائلي في غابة رغدان',
      lead: 'مسار يجمع بين المشي واللعب والجلوس. خطط لنصف يوم، مع إشراف مباشر قرب الحواف والمنحدرات.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'اقتراح',
          paragraphs: [
            'ابدأ من المناطق المطورة القريبة من المواقف، ثم خصص وقتاً لمناطق الألعاب والمقاعد. اختم بنزهة في المساحة المهيأة أو وجبة في الباحة.'
          ]
        },
        {
          heading: 'ترتيب مقترح',
          bullets: [
            'وصول ومشي هادئ عند المطلات.',
            'وقت للعب في المناطق المهيأة.',
            'جلوس أو نزهة، ثم العودة قبل إغلاق البوابة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل الغابة مناسبة ليوم عائلي؟',
          a: 'نعم؛ توجد مساحات خضراء ومناطق ألعاب ومقاعد. الإشراف المباشر ضروري بسبب الطبيعة الجبلية.'
        }
      ]
    },
    en: {
      h1: 'A half-day family route at Raghadan Forest',
      lead: 'A route combining walking, play and seating. Plan half a day, with direct supervision near edges and slopes.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Suggestion',
          paragraphs: [
            'Start from developed areas near the parking, then allocate time for playground and seating. End with a picnic in the prepared space or a meal in Al Bahah.'
          ]
        },
        {
          heading: 'Proposed order',
          bullets: [
            'Arrival and relaxed walk at overlooks.',
            'Play time in prepared areas.',
            'Seating or picnic, then return before gate closes.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is the forest suitable for a family day?',
          a: 'Yes; there are green spaces, playgrounds and seating. Direct supervision is essential because of the mountainous nature.'
        }
      ]
    }
  },
  {
    group: 'itineraries',
    slug: 'evening-coffee',
    related: ['night-lights', 'sunset', 'cafes', 'restaurants', 'crowds'],
    ar: {
      h1: 'مساء قهوة في غابة رغدان والباحة',
      lead: 'أمسيات الباحة حيوية، لا سيما في الصيف. خطط لمساء يجمع بين إطلالة غروب ومقهى، مع التأكد من ساعات الدخول.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'اقتراح',
          paragraphs: [
            'وصل قبل الغروب إلى مطل مهيأ، ثم توجه إلى مقهى في الباحة. لا تفترض إضاءة مضمونة داخل الغابة ليلاً؛ راجع الإتاحة.'
          ]
        },
        {
          heading: 'نقاط',
          bullets: [
            'راقب ساعات الدخول.',
            'احجز مقهى مبكراً في ذروة المساء.',
            'أمن عودتك قبل إغلاق البوابة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل أخطط لمساء في الغابة؟',
          a: 'نعم، لكن إضاءة الغابة ليلاً غير مضمونة طوال العام. راقب ساعات الدخول وخطط العودة.'
        }
      ]
    },
    en: {
      h1: 'An evening coffee at Raghadan Forest and Al Bahah',
      lead: 'Al Bahah evenings are lively, especially in summer. Plan an evening combining a sunset overlook and a café, confirming entry hours.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Suggestion',
          paragraphs: [
            'Arrive before sunset at a prepared overlook, then head to a café in Al Bahah. Do not assume guaranteed in-forest lighting at night; check availability.'
          ]
        },
        {
          heading: 'Points',
          bullets: [
            'Watch entry hours.',
            'Book a café early at evening peak.',
            'Secure your return before the gate closes.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Should I plan an evening in the forest?',
          a: 'Yes, but in-forest lighting at night is not guaranteed year-round. Watch entry hours and plan the return.'
        }
      ]
    }
  },
  {
    group: 'itineraries',
    slug: 'one-day-al-baha',
    related: ['dhee-ayn-village', 'al-shafa-highlands', 'prince-hussam-park', 'from-airport', 'best-time'],
    ar: {
      h1: 'يوم كامل في الباحة مع غابة رغدان',
      lead: 'ادمج الغابة مع وجهة قريبة مثل ذي عين أو الشفا أو أحد المتنزهات. راجع المسافات والطرق الجبلية وصيفها اعتدالها.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'اقتراح',
          paragraphs: [
            'ابدأ بغابة رغدان صباحاً، ثم انتقل إلى وجهة قريبة اخترتها. لا تبالغ في عدد الوجهات؛ الطرق جبلية والضباب قد يبطئ الحركة.'
          ]
        },
        {
          heading: 'نقاط',
          bullets: [
            'خصص كل وجهة بوقت كافٍ.',
            'امتلئ الوقود قبل المرتفعات.',
            'راجع الطقس والضباب مسبقاً.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل يوم واحد يكفي لغابة رغدان والباحة؟',
          a: 'نعم إن اكتفيت بوجهة قريبة إضافية واحدة. لا تبالغ في العدد بسبب الطرق الجبلية.'
        }
      ]
    },
    en: {
      h1: 'A full day in Al Bahah with Raghadan Forest',
      lead: 'Combine the forest with a nearby destination such as Dhee Ain, Al Shafa or a park. Check distances, mountain roads and the mild summer.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Suggestion',
          paragraphs: [
            'Start with Raghadan Forest in the morning, then move to one chosen nearby destination. Do not over-pack destinations; roads are mountainous and fog may slow movement.'
          ]
        },
        {
          heading: 'Points',
          bullets: [
            'Give each destination enough time.',
            'Fill fuel before the highlands.',
            'Check weather and fog in advance.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is one day enough for Raghadan Forest and Al Bahah?',
          a: 'Yes if you keep to one additional nearby destination. Do not over-pack because of mountain roads.'
        }
      ]
    }
  },
  {
    group: 'itineraries',
    slug: 'nature-heritage',
    related: ['juniper-nature', 'al-shafa-highlands', 'dhee-ayn-village', 'one-day-al-baha', 'photography'],
    ar: {
      h1: 'مسار طبيعة وتراث في الباحة',
      lead: 'ادمج بين طبيعة المرتفعات ووجهة تراثية مثل ذي عين. احترم طابع المكان التراثي والمسارات المهيأة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'اقتراح',
          paragraphs: [
            'ابدأ بطبيعة الغابة وغطاء العرعر، ثم انتقل إلى قرية ذي عين التراثية. هذا يجمع بين الطبيعة والثقافة في يوم واحد.'
          ]
        },
        {
          heading: 'نقاط',
          bullets: [
            'لا تقتطع نباتات أو تخالف تعليمات المسارات.',
            'احترم المكان التراثي والمقيمين.',
            'راقب ساعات الزيارة للمواقع التراثية.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل أجمع الطبيعة والتراث في يوم واحد؟',
          a: 'نعم، الغابة وذي عين قريبان ضمن منطقة الباحة. راجع المسافات والمواقع الحالية.'
        }
      ]
    },
    en: {
      h1: 'A nature and heritage route in Al Bahah',
      lead: 'Combine highland nature with a heritage destination such as Dhee Ain. Respect the heritage character and prepared trails.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Suggestion',
          paragraphs: [
            'Start with the forest\'s nature and juniper cover, then move to Dhee Ain heritage village. This blends nature and culture in one day.'
          ]
        },
        {
          heading: 'Points',
          bullets: [
            'Do not cut plants or break trail rules.',
            'Respect the heritage site and residents.',
            'Watch visiting hours for heritage sites.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Can I combine nature and heritage in one day?',
          a: 'Yes, the forest and Dhee Ain are both within the Al Bahah area. Check distances and current locations.'
        }
      ]
    }
  }
];
