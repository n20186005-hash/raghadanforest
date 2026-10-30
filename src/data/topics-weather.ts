import type { Topic } from './topics-types';
import { UPDATED_AR, UPDATED_EN } from './topics-types';

export const WEATHER_TOPICS: Topic[] = [
  {
    group: 'weather',
    slug: 'fog',
    related: ['best-time', 'summer', 'winter', 'viewpoints', 'photography'],
    ar: {
      h1: 'ضباب الباحة وغابة رغدان',
      lead: 'تُلقب الباحة بمدينة الضباب والسحب، وتزداد فرصة الضباب فوق المرتفعات. الظاهرة متكررة لكنها غير مضمونة في كل يوم.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'لماذا يكثر الضباب؟',
          paragraphs: [
            'تقع الباحة في المرتفعات الغربية، ما يرفع فرصة تشكل الضباب والسحب المنخفضة فوق المنحدرات. يُلقب المكان بمدينة الضباب والسحب.'
          ]
        },
        {
          heading: 'نصائح للتعامل مع الضباب',
          bullets: [
            'خفف السرعة على الطريق الجبلي واستخدم الأنوار.',
            'لا تفترض إطلالة واضحة؛ الضباب قد يخفي المشهد.',
            'راجع توقعات المركز الوطني للأرصاد قبل التحرك.'
          ]
        }
      ],
      faqs: [
        {
          q: 'متى يكثر الضباب في الباحة؟',
          a: 'الضباب ظاهرة متكررة فوق المرتفعات، لكنها غير مضمونة يومياً. الصباح الباكر وأيام الرطوبة ترفع احتماله.'
        },
        {
          q: 'هل أضمن رؤية الضباب في زيارتي؟',
          a: 'لا؛ الضباب غير مضمون. تعامل معه كفرصة وليس كحدث مؤكد.'
        }
      ]
    },
    en: {
      h1: 'Al Bahah fog and Raghadan Forest',
      lead: 'Al Bahah is nicknamed the city of fog and clouds, and fog chance rises over the highlands. The phenomenon is frequent but not guaranteed every day.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Why fog is common',
          paragraphs: [
            'Al Bahah sits in the western highlands, raising the chance of low cloud and fog forming over the slopes. The place is nicknamed the city of fog and clouds.'
          ]
        },
        {
          heading: 'Tips for fog',
          bullets: [
            'Slow down and use lights on the mountain road.',
            'Do not assume a clear view; fog may hide the scene.',
            'Check the National Centre for Meteorology forecast before moving.'
          ]
        }
      ],
      faqs: [
        {
          q: 'When is fog frequent in Al Bahah?',
          a: 'Fog is a recurring phenomenon over the highlands but not guaranteed daily. Early morning and humid days raise its chance.'
        },
        {
          q: 'Will I definitely see fog on my visit?',
          a: 'No; fog is not guaranteed. Treat it as an opportunity, not a sure event.'
        }
      ]
    }
  },
  {
    group: 'weather',
    slug: 'best-time',
    related: ['fog', 'summer', 'winter', 'crowds', 'one-day-al-baha'],
    ar: {
      h1: 'أفضل وقت لزيارة غابة رغدان',
      lead: 'الصيف وجهة مفضلة لاعتدال أجواء المرتفعات مقارنة بالمناطق الأكثر حرارة. الضباب والربيع يضيفان جمالاً، لكن لا يوجد شهر مضمون للضباب.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'نظرة عامة',
          paragraphs: [
            'يزداد إقبال الزوار في الصيف بسبب اعتدال أجواء الباحة المرتفعة. الربيع والضباب يضيفان مشهداً مميزاً، لكن اختيار «أفضل وقت» يعتمد على رغبتك بالهدوء أو بالحركة.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'للهدوء: زر مبكراً أو في يوم غير عطلة.',
            'للضباب: كن مرناً؛ الظاهرة غير مضمونة.',
            'راجع توقعات الأرصاد قبل الحجز.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ما أفضل شهر لزيارة الغابة؟',
          a: 'الصيف مفضل لاعتدال الأجواء المرتفعة. لا يوجد شهر مضمون للضباب؛ الخيار يعتمد على تفضيلك للهدوء أو الحركة.'
        },
        {
          q: 'هل الشتاء مناسب للزيارة؟',
          a: 'الشتاء قد يحمل مطراً وبرودة وضباباً كثيفاً. راجع الطقس وتأكد من ساعات الدخول.'
        }
      ]
    },
    en: {
      h1: 'Best time to visit Raghadan Forest',
      lead: 'Summer is a favored season because highland weather is milder than hotter regions. Fog and spring add beauty, but no month guarantees fog.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Visitor attendance increases in summer because Al Bahah\'s elevated weather is milder. Spring and fog add a distinct scene, but choosing the "best time" depends on whether you want calm or activity.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'For calm: visit early or on a non-holiday day.',
            'For fog: stay flexible; the phenomenon is not guaranteed.',
            'Check the meteorological forecast before booking.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What is the best month to visit?',
          a: 'Summer is preferred for mild highland weather. No month guarantees fog; the choice depends on your preference for calm or activity.'
        },
        {
          q: 'Is winter suitable for a visit?',
          a: 'Winter may bring rain, cold and dense fog. Check the weather and confirm entry hours.'
        }
      ]
    }
  },
  {
    group: 'weather',
    slug: 'summer',
    related: ['best-time', 'fog', 'crowds', 'evening-coffee', 'night-lights'],
    ar: {
      h1: 'صيف غابة رغدان',
      lead: 'صيف الباحة معتدل نسبياً مقارنة بالمناطق الأكثر حرارة، ما يجعل الغابة مقصداً صيفياً. الأمسيات تتطلب طبقة خفيفة دافئة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما تتوقعه',
          paragraphs: [
            'بفضل الارتفاع، تكون أجواء الباحة ألطف صيفاً من المناطق المنخفضة الحارة. هذا يجعل الغابة مقصداً للزيارة في الصيف.',
            'المرتفعات قد تنخفض فيها الحرارة ليلاً؛ احمل طبقة خفيفة دافئة للمساء.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'احجز مبكراً في ذروة الصيف والعطل.',
            'تجنب الجهد عند منتصف النهار.',
            'أبقِ ماء كافياً معك.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل الباحة حارة صيفاً؟',
          a: 'ألطف من المناطق المنخفضة الحارة بفضل الارتفاع، لكن النهار قد يكون دافئاً. المساء أكثر اعتدالاً.'
        },
        {
          q: 'هل تزدحم الغابة صيفاً؟',
          a: 'نعم، الصيف ذروة الإقبال، خصوصاً الأمسيات وعطل نهاية الأسبوع.'
        }
      ]
    },
    en: {
      h1: 'Summer at Raghadan Forest',
      lead: 'Al Bahah\'s summer is relatively mild compared with hotter regions, making the forest a summer destination. Evenings call for a light warm layer.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What to expect',
          paragraphs: [
            'Thanks to elevation, Al Bahah weather is milder in summer than in hot lowland regions. This makes the forest a summer destination.',
            'Highlands may cool at night; carry a light warm layer for the evening.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Book early at summer and holiday peaks.',
            'Avoid exertion at midday.',
            'Keep enough water with you.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Al Bahah hot in summer?',
          a: 'Milder than hot lowland regions thanks to elevation, but midday can be warm. Evenings are more moderate.'
        },
        {
          q: 'Does the forest get crowded in summer?',
          a: 'Yes, summer is peak attendance, especially evenings and weekend holidays.'
        }
      ]
    }
  },
  {
    group: 'weather',
    slug: 'winter',
    related: ['best-time', 'fog', 'summer', 'supplies', 'from-airport'],
    ar: {
      h1: 'شتاء غابة رغدان',
      lead: 'شتاء المرتفعات يحمل برودة ومطراً وضباباً كثيفاً. جهّز ملابس دافئة ومطرية، وراجع الطقس قبل التحرك.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما تتوقعه',
          paragraphs: [
            'شتاء المرتفعات الغربية بارد نسبياً مع احتمال مطر وضباب كثيف. المنحدرات قد تكون زلقة بعد المطر.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'احمل طبقة دافئة ومطرية.',
            'خفف السرعة على الطريق الجبلي المبلل.',
            'راجع توقعات الأرصاد وتأكد من ساعات الدخول.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل الثلج ينزل على غابة رغدان؟',
          a: 'لم نتحقق من تساقط ثلج منتظم. الشتاء بارد وممطر غالباً؛ راجع الطقس عند الزيارة.'
        },
        {
          q: 'هل الشتاء مناسب للزيارة؟',
          a: 'نعم لمن يفضّل الضباب والهدوء، لكن احترس من المطر والبرودة والطريق.'
        }
      ]
    },
    en: {
      h1: 'Winter at Raghadan Forest',
      lead: 'Highland winter brings cold, rain and dense fog. Prepare warm and rain gear, and check the weather before moving.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What to expect',
          paragraphs: [
            'Western-highland winter is relatively cold with a chance of rain and dense fog. Slopes may be slippery after rain.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Carry a warm and rain layer.',
            'Slow down on the wet mountain road.',
            'Check the meteorological forecast and confirm entry hours.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Does it snow at Raghadan Forest?',
          a: 'We did not verify regular snowfall. Winter is usually cold and rainy; check the weather at visit time.'
        },
        {
          q: 'Is winter suitable for a visit?',
          a: 'Yes for those who prefer fog and calm, but beware rain, cold and the road.'
        }
      ]
    }
  },
  {
    group: 'weather',
    slug: 'sunset',
    related: ['viewpoints', 'fog', 'evening-coffee', 'night-lights', 'photography'],
    ar: {
      h1: 'غروب غابة رغدان',
      lead: 'مستوى الغابة المرتفع يمنح غروباً فوق المنحدرات والسحب. الضباب قد يخفي الشمس، فتعامل مع الغروب كفرصة غير مضمونة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'أين وأين؟',
          paragraphs: [
            'استخدم المطلات المهيأة لرؤية الغروب فوق منحدرات الباحة. اترك وقتاً للوصول قبل الغروب ضمن ساعات الدخول.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'وصل قبل الغروب بنحو 30 دقيقة.',
            'احرص على العودة قبل إغلاق البوابة.',
            'لا تقف على حواف غير مسيجة للتصوير.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ما أفضل وقت للغروب؟',
          a: 'قبل الغروب بنحو 30 دقيقة عند المطلات المهيأة. لا تفترض رؤية الشمس بسبب الضباب.'
        },
        {
          q: 'هل الغروب مضمون؟',
          a: 'لا؛ الضباب والغيوم قد تخفي الشمس. تعامل معه كفرصة.'
        }
      ]
    },
    en: {
      h1: 'Sunset at Raghadan Forest',
      lead: 'The forest\'s elevated level offers a sunset above the slopes and clouds. Fog may hide the sun, so treat sunset as a non-guaranteed opportunity.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Where and when',
          paragraphs: [
            'Use the prepared overlooks to watch the sunset above Al Bahah slopes. Leave time to arrive before sunset within entry hours.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Arrive about 30 minutes before sunset.',
            'Ensure return before the gate closes.',
            'Do not stand on unguarded edges for photos.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What is the best sunset time?',
          a: 'About 30 minutes before sunset at prepared overlooks. Do not assume you will see the sun due to fog.'
        },
        {
          q: 'Is sunset guaranteed?',
          a: 'No; fog and clouds may hide the sun. Treat it as an opportunity.'
        }
      ]
    }
  }
];
