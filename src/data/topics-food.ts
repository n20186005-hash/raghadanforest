import type { Topic } from './topics-types';
import { UPDATED_AR, UPDATED_EN } from './topics-types';

export const FOOD_TOPICS: Topic[] = [
  {
    group: 'food',
    slug: 'restaurants',
    related: ['cafes', 'family-meals', 'quick-bites', 'supplies', 'with-kids'],
    ar: {
      h1: 'مطاعم قرب غابة رغدان',
      lead: 'ضمن الباحة توجد خيارات طعام متنوعة، لكننا لا نرشّح مطعماً محدداً دون التحقق من موقعه وتقييمه. راجع أحدث القوائم المحلية عند الوصول.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'كيف تختار؟',
          paragraphs: [
            'الباحة مدينة بها خيارات طعام تتراوح بين المطاعم والمطاعم الشعبية. لم نتحقق من قائمة ثابتة قرب بوابة الغابة، لذا ننصح بالبحث المحلي عن الأقرب والأحدث.',
            'الاعتماد على تطبيقات الخرائط وتقييمات الزوار وقت الزيارة أدق من أي ترشيح ثابت قد يتغير.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'راجع ساعات العمل عند الوصول؛ قد تختلف.',
            'تأكد من الموقع قبل الاعتماد على التنقل إليه.',
            'خصص وقتاً كافياً في ذروة المساء.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل يوجد مطعم داخل غابة رغدان؟',
          a: 'لم نتحقق من مطعم ثابت داخل حدود الغابة. خيارات الطعام في الباحة بشكل عام؛ راجع المحلي عند الوصول.'
        },
        {
          q: 'هل المطاعم قريبة من البوابة؟',
          a: 'المواقع تختلف؛ لا نرشّح عنواناً محدداً. استخدم خرائط الزوار المحدّثة.'
        }
      ]
    },
    en: {
      h1: 'Restaurants near Raghadan Forest',
      lead: 'Al Bahah has varied dining options, but we do not recommend a specific restaurant without verifying its location and rating. Check the latest local listings on arrival.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'How to choose',
          paragraphs: [
            'Al Bahah is a city with dining options ranging from restaurants to casual eateries. We did not verify a fixed list near the forest gate, so we suggest searching locally for the closest and most current.',
            'Relying on map apps and visitor reviews at travel time is more accurate than any fixed recommendation that may change.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Check opening hours on arrival; they may vary.',
            'Confirm the location before relying on going there.',
            'Allow enough time at evening peak.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is there a restaurant inside Raghadan Forest?',
          a: 'We did not verify a fixed restaurant within the forest bounds. Dining options are in Al Bahah generally; check locally on arrival.'
        },
        {
          q: 'Are restaurants close to the gate?',
          a: 'Locations vary; we do not recommend a specific address. Use updated visitor maps.'
        }
      ]
    }
  },
  {
    group: 'food',
    slug: 'cafes',
    related: ['restaurants', 'family-meals', 'quick-bites', 'evening-coffee', 'supplies'],
    ar: {
      h1: 'مقاهٍ قرب غابة رغدان',
      lead: 'المقاهي جزء من مشهد الباحة خصوصاً في الأمسيات. لم نرشّح مقهى بعينه؛ راجع أحدث المواقع والتقييمات عند الوصول.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما تتوقعه',
          paragraphs: [
            'تنتشر المقاهي في الباحة وتزداد حيويتها في الأمسيات والمواسم. المواقع والتقييمات تتغير، لذا اكتفِ بالتحقق المحلي.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'ابحث عن الأقرب لمسارك.',
            'راجع ساعات العمل المعلنة.',
            'احترم أماكن الجلوس المهيأة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل يوجد مقهى داخل الغابة؟',
          a: 'لم نتحقق من مقهى ثابت داخل الغابة. المقاهي في الباحة عموماً؛ راجع المحلي.'
        },
        {
          q: 'هل المقاهي مناسبة للعائلات؟',
          a: 'تختلف بطبيعتها؛ راجع المكان المناسب لعائلتك عند الوصول.'
        }
      ]
    },
    en: {
      h1: 'Cafés near Raghadan Forest',
      lead: 'Cafés are part of Al Bahah\'s scene, especially in the evenings. We do not recommend a specific one; check the latest spots and reviews on arrival.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What to expect',
          paragraphs: [
            'Cafés spread across Al Bahah and become livelier in evenings and seasons. Locations and ratings change, so just verify locally.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Search for the closest to your route.',
            'Check the posted opening hours.',
            'Respect prepared seating areas.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is there a café inside the forest?',
          a: 'We did not verify a fixed café inside the forest. Cafés are in Al Bahah generally; check locally.'
        },
        {
          q: 'Are cafés family-friendly?',
          a: 'They differ in nature; check the place suited to your family on arrival.'
        }
      ]
    }
  },
  {
    group: 'food',
    slug: 'family-meals',
    related: ['restaurants', 'cafes', 'with-kids', 'picnic', 'supplies'],
    ar: {
      h1: 'وجبات العائلات قرب غابة رغدان',
      lead: 'الباحة توفر خيارات وجبات مناسبة للعائلات، لكننا ننصح بالتحقق المحلي من القوائم والأسعار وقت الزيارة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'نصائح للعائلات',
          paragraphs: [
            'ابحث عن الأماكن التي توفر مقاعد وأجواءً مناسبة للأطفال. لا نؤكد قائمة أسعار ثابتة؛ الأسعار والتوفر يتغيران.',
            'النزهة في المساحات المهيأة بالغابة بديل آمن ومجاني عموماً إن فضّلت إحضار طعامك.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'راجع التقييمات الحديثة.',
            'تأكد من توفر خيارات الأطفال.',
            'احجز مبكراً في ذروة المساء.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل توجد وجبات للأطفال؟',
          a: 'تختلف الأماكن؛ راجع المكان الذي يوفر خيارات مناسبة لعائلتك عند الوصول.'
        },
        {
          q: 'هل تثبيت سعر الوجبة مضمون؟',
          a: 'لا نؤكد قائمة أسعار ثابتة. الأسعار والتوفر يتغيران؛ راجع محلياً.'
        }
      ]
    },
    en: {
      h1: 'Family meals near Raghadan Forest',
      lead: 'Al Bahah offers family-suitable meal options, but we advise verifying local menus and prices at travel time.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Tips for families',
          paragraphs: [
            'Look for places with seating and a child-friendly atmosphere. We do not confirm a fixed price list; prices and availability change.',
            'A picnic in the forest\'s prepared spaces is a safe, generally free alternative if you prefer bringing your own food.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Check recent reviews.',
            'Confirm child options are available.',
            'Book early at evening peak.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are there kids\' meals?',
          a: 'Places differ; check the one offering options suited to your family on arrival.'
        },
        {
          q: 'Is the meal price fixed?',
          a: 'We do not confirm a fixed price list. Prices and availability change; check locally.'
        }
      ]
    }
  },
  {
    group: 'food',
    slug: 'quick-bites',
    related: ['supplies', 'cafes', 'restaurants', 'picnic', 'with-kids'],
    ar: {
      h1: 'وجبات سريعة وخفيفة قرب غابة رغدان',
      lead: 'خيارات الخفيف والسريع متاحة في الباحة، لكن المواقع تتغير. راجع المحلي وتأكد قبل الاعتماد عليها.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'نصائح',
          paragraphs: [
            'عند قصر الوقت، ابحث عن خيارات الخفيف القريبة من مسارك. لا نرشّح منفذاً محدداً دون التحقق.'
          ]
        },
        {
          heading: 'نقاط',
          bullets: [
            'تأكد من ساعات العمل.',
            'راجع التقييمات الحديثة.',
            'احتفظ بماء كافٍ.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل توجد وجبات سريعة قرب الغابة؟',
          a: 'الباحة بها خيارات متنوعة تتغير مواقعها؛ راجع المحلي عند الوصول.'
        }
      ]
    },
    en: {
      h1: 'Quick bites near Raghadan Forest',
      lead: 'Light and quick options are available in Al Bahah, but locations change. Check locally and confirm before relying on them.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Tips',
          paragraphs: [
            'When short on time, look for light options close to your route. We do not recommend a specific outlet without verification.'
          ]
        },
        {
          heading: 'Points',
          bullets: [
            'Confirm opening hours.',
            'Check recent reviews.',
            'Keep enough water.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are there quick bites near the forest?',
          a: 'Al Bahah has varied options whose locations change; check locally on arrival.'
        }
      ]
    }
  },
  {
    group: 'food',
    slug: 'supplies',
    related: ['picnic', 'quick-bites', 'family-meals', 'restrooms-prayer', 'with-kids'],
    ar: {
      h1: 'التموين والاحتياجات قبل غابة رغدان',
      lead: 'تأمين الماء والاحتياجات الأساسية قبل الصعود يوفر الوقت. الباحة بها منافذ تموين، لكن تحقق من المواقع الحالية.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ماذا تحضر؟',
          paragraphs: [
            'احرص على ماء كافٍ، خصوصاً في الصيف. منافذ التموين في الباحة متاحة، لكن مواقعها وأوقاتها تتغير؛ تأكد قبل الاعتماد عليها.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'امتلئ خزان الوقود قبل المرتفعات.',
            'احمل حقيبة أساسية (ماء، شمسية، طبقة دافئة).',
            'لا تترك نفايات في الغابة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل توجد متاجر داخل الغابة؟',
          a: 'لم نتحقق من متجر ثابت داخل الغابة. تموّن قبل الصعود من الباحة.'
        },
        {
          q: 'ما الأساسيات التي أنصح بها؟',
          a: 'ماء كافٍ، حماية شمسية، وطبقة دافئة للمساء.'
        }
      ]
    },
    en: {
      h1: 'Supplies and essentials before Raghadan Forest',
      lead: 'Securing water and basic needs before the climb saves time. Al Bahah has supply outlets, but verify current locations.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What to bring',
          paragraphs: [
            'Ensure enough water, especially in summer. Supply outlets in Al Bahah are available, but their locations and hours change; confirm before relying on them.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Fill the fuel tank before the highlands.',
            'Carry a basic bag (water, sun protection, warm layer).',
            'Leave no litter in the forest.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are there shops inside the forest?',
          a: 'We did not verify a fixed shop inside the forest. Stock up before the climb from Al Bahah.'
        },
        {
          q: 'What essentials do you advise?',
          a: 'Enough water, sun protection, and a warm layer for the evening.'
        }
      ]
    }
  }
];
