import type { Topic } from './topics-types';
import { UPDATED_AR, UPDATED_EN } from './topics-types';

export const INSIDE_TOPICS: Topic[] = [
  {
    group: 'inside',
    slug: 'al-ghaym-walkway',
    related: ['lavender-walkway', 'viewpoints', 'photography', 'juniper-nature', 'picnic'],
    ar: {
      h1: 'ممشى الغيم في غابة رغدان',
      lead: 'ممشى الغيم مسار مرتفع فوق منحدرات الباحة يمنح إطلالة على السحب والضباب. يُذكر ضمن تطوير الغابة ويقدَّر طوله بنحو 650 متراً.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما هو ممشى الغيم؟',
          paragraphs: [
            'ممشى الغيم اسم يطلق على مسار مرتفع فوق منحدرات الباحة يتيح النظر إلى السحب والضباب من مستوى أعلى. يرد ذكره ضمن تطوير الغابة كأحد عناصر المشي المطور.',
            'تقدَّر أطوال المسارات المطورة بنحو 650 متراً في المصادر التي راجعناها، لكن تحقق من الإتاحة عند الوصول فقد تتغير للصيانة أو الطقس.'
          ]
        },
        {
          heading: 'نصائح للمشي',
          bullets: [
            'ابدأ من المناطق المطورة القريبة من المواقف.',
            'احرص على الإشراف قرب الحواف المرتفعة.',
            'الضباب قد يخفي الإطلالة تماماً؛ لا تفترض رؤية مضمونة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'كم طول ممشى الغيم؟',
          a: 'تقدَّر المسارات المطورة بنحو 650 متراً في المصادر التي راجعناها. تحقق من الإتاحة عند الوصول.'
        },
        {
          q: 'هل ممشى الغيم مناسب للأطفال؟',
          a: 'هو من المسارات المطورة، لكنه مرتفع قرب حواف. الإشراف المباشر ضروري.'
        }
      ]
    },
    en: {
      h1: 'The Cloud Walk at Raghadan Forest',
      lead: 'The Cloud Walk is an elevated trail above Al Bahah slopes offering a view over clouds and fog. It is mentioned within the forest development, with its length estimated around 650 meters.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What is the Cloud Walk?',
          paragraphs: [
            'The Cloud Walk is a name given to an elevated trail above Al Bahah slopes that lets you look down on clouds and fog from a higher level. It is cited within the forest development as one of the developed walking elements.',
            'Developed trail lengths are estimated around 650 meters in the sources we reviewed, but confirm availability on arrival as it may change for maintenance or weather.'
          ]
        },
        {
          heading: 'Walking tips',
          bullets: [
            'Start from developed areas near the parking.',
            'Keep supervision near elevated edges.',
            'Fog may hide the view entirely; do not assume guaranteed visibility.'
          ]
        }
      ],
      faqs: [
        {
          q: 'How long is the Cloud Walk?',
          a: 'Developed trails are estimated around 650 meters in the sources we reviewed. Confirm availability on arrival.'
        },
        {
          q: 'Is the Cloud Walk suitable for children?',
          a: 'It is among the developed trails but elevated near edges. Direct supervision is essential.'
        }
      ]
    }
  },
  {
    group: 'inside',
    slug: 'lavender-walkway',
    related: ['al-ghaym-walkway', 'photography', 'picnic', 'juniper-nature', 'bahjat-raghadan'],
    ar: {
      h1: 'ممشى اللافندر في غابة رغدان',
      lead: 'اللافندر جزء من تشجير الغابة وتجميلها. كثافة الأزهار تتغير بحسب الموسم، لذا لا تفترض إزهاراً كاملاً في كل زيارة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'لماذا قد تراه أو لا تراه؟',
          paragraphs: [
            'ذُكر اللافندر ضمن تشجير الغابة وتجميلها كعنصر بصري. كثافة الإزهار وتوقيتها مرتبطة بالموسم وحالة النبات، ولم نتحقق من موسم إزهار ثابت.'
          ]
        },
        {
          heading: 'نصيحة للتصوير',
          bullets: [
            'تعامل مع اللافندر كعنصر موسمي غير مضمون.',
            'احترم المسارات المهيأة وما تطأه أقدام الزوار.',
            'لا تقتطع النباتات؛ الغابة موقع عام.'
          ]
        }
      ],
      faqs: [
        {
          q: 'متى يزهر اللافندر في الغابة؟',
          a: 'لم نتحقق من موسم إزهار ثابت. كثافة الأزهار موسمية وتتغير؛ لا تفترض إزهاراً كاملاً في كل زيارة.'
        },
        {
          q: 'هل ممشى اللافندر مجاني؟',
          a: 'الدخول للغابة مجاني عموماً؛ اللافندر جزء من التشجير العام ضمنها.'
        }
      ]
    },
    en: {
      h1: 'The lavender walkway at Raghadan Forest',
      lead: 'Lavender is part of the forest\'s planting and beautification. Bloom density changes by season, so do not assume full flowering on every visit.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Why you may or may not see it',
          paragraphs: [
            'Lavender is mentioned among the forest planting and beautification as a visual element. Bloom density and timing depend on the season and plant condition; we did not verify a fixed blooming season.'
          ]
        },
        {
          heading: 'Photo tip',
          bullets: [
            'Treat lavender as a seasonal, not guaranteed, element.',
            'Stay on prepared paths and where visitor footfall is intended.',
            'Do not cut plants; the forest is a public site.'
          ]
        }
      ],
      faqs: [
        {
          q: 'When does lavender bloom in the forest?',
          a: 'We did not verify a fixed blooming season. Bloom density is seasonal and changes; do not assume full flowering on every visit.'
        },
        {
          q: 'Is the lavender walkway free?',
          a: 'Forest entry is generally free; lavender is part of the general planting within it.'
        }
      ]
    }
  },
  {
    group: 'inside',
    slug: 'bahjat-raghadan',
    related: ['al-ghaym-walkway', 'lavender-walkway', 'picnic', 'night-lights', 'viewpoints'],
    ar: {
      h1: 'بهجة رغدان: واجهة التطوير الرئيسية',
      lead: '«بهجة رغدان» واجهة تطويرية للغابة أعلنت عنها وكالة الأنباء السعودية في 12 يوليو 2024، وتضم عناصر مشي ومياه ومرافق خدمية. تحقق من المرافق المتاحة عند الوصول.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما نعرفه',
          paragraphs: [
            'نشرت وكالة الأنباء السعودية في 12 يوليو 2024 أن «بهجة رغدان» تتضمن ممشى ومسطحات مائية ومرافق خدمية متنوعة ضمن تطوير الغابة.',
            'تفاصيل التشغيل وأوقات الإتاحة لكل عنصر قد تتغير؛ لذا نعرض الإطار العام ولا نؤكد تشغيل عنصر محدد دون رؤيته عند البوابة.'
          ]
        },
        {
          heading: 'نصيحة',
          bullets: [
            'ابدأ جولتك من الواجهة المطورة حيث المرافق الرئيسية.',
            'راقب لوحات الإرشاد للمناطق المفتوحة والمغلقة.',
            'لا تفترض إتاحة كل عنصر في كل وقت.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ما هي بهجة رغدان؟',
          a: 'واجهة تطويرية للغابة أعلنتها واس في 12 يوليو 2024، تشمل ممشى ومسطحات مائية ومرافق خدمية. تحقق من المرافق المتاحة عند الوصول.'
        },
        {
          q: 'هل بهجة رغدان مجانية؟',
          a: 'الدخول للغابة مجاني عموماً؛ لكن عمليات عناصر محددة قد تختلف. لا نفترض تعرفة ثابتة.'
        }
      ]
    },
    en: {
      h1: 'Bahjat Raghadan: the main development front',
      lead: 'Bahjat Raghadan is a development front of the forest announced by the Saudi Press Agency on 12 July 2024, with walking elements, water features and service facilities. Confirm available facilities on arrival.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What we know',
          paragraphs: [
            'The Saudi Press Agency announced on 12 July 2024 that Bahjat Raghadan includes a walkway, water features and varied service facilities within the forest development.',
            'Operating details and availability times of each element may change; we present the general frame and do not confirm a specific element\'s operation without seeing it at the gate.'
          ]
        },
        {
          heading: 'Tip',
          bullets: [
            'Start your tour from the developed front where main facilities are.',
            'Follow directional signs for open and closed areas.',
            'Do not assume every element is available at all times.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What is Bahjat Raghadan?',
          a: 'A development front of the forest announced by SPA on 12 July 2024, including a walkway, water features and service facilities. Confirm available facilities on arrival.'
        },
        {
          q: 'Is Bahjat Raghadan free?',
          a: 'Forest entry is generally free; but operations of specific elements may differ. We do not assume a fixed tariff.'
        }
      ]
    }
  },
  {
    group: 'inside',
    slug: 'zipline',
    related: ['suspension-bridge', 'viewpoints', 'night-lights', 'with-kids', 'picnic'],
    ar: {
      h1: 'الأنشطة المعلقة في غابة رغدان (مثل الزيبلاين)',
      lead: 'تضم الغابة مرافق ترفيهية مطورة قد تشمل عناصر معلقة. نظراً لاختلاف الإتاحة والتشغيل، لا نؤكد وجود أو تشغيل عنصر محدد؛ تحقق عند البوابة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'حذر الحقائق',
          paragraphs: [
            'ضمن المرافق الترفيهية المطورة قد توجد عناصر معلقة مثل الزيبلاين، لكننا لم نتحقق من تشغيل ثابت أو مواقع محددة. نعرضها كفئة ممكنة ولا نرجّح التوفر.',
            'قواعد السلامة وشروط التشغيل يحددها المشغّل؛ لا تفترض إتاحتها في كل زيارة.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'اسأل عند البوابة أو مركز المعلومات عن العناصر العاملة حالياً.',
            'تحقق من اشتراطات العمر والوزن قبل الدخول.',
            'احترم تعليمات السلامة المعلنة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل يوجد زيبلاين في غابة رغدان؟',
          a: 'قد توجد عناصر ترفيهية معلقة ضمن المرافق المطورة، لكننا لم نتحقق من تشغيل ثابت. تحقق عند البوابة عن العناصر العاملة حالياً.'
        },
        {
          q: 'هل هي مناسبة للأطفال؟',
          a: 'اشتراطات العمر والوزن يحددها المشغّل؛ لا نؤكدها. اسأل عند الموقع.'
        }
      ]
    },
    en: {
      h1: 'Aerial activities at Raghadan Forest (e.g., zipline)',
      lead: 'The forest has developed recreational facilities that may include aerial elements. Because availability and operation vary, we do not confirm the presence or operation of a specific element; check at the gate.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Fact caution',
          paragraphs: [
            'Among developed recreational facilities there may be aerial elements such as a zipline, but we did not verify a fixed operation or specific locations. We present this as a possible category, not asserting availability.',
            'Safety rules and operating conditions are set by the operator; do not assume availability on every visit.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Ask at the gate or info point which elements are operating now.',
            'Verify age and weight requirements before entry.',
            'Follow posted safety instructions.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is there a zipline at Raghadan Forest?',
          a: 'There may be aerial recreational elements within the developed facilities, but we did not verify a fixed operation. Check at the gate about currently operating elements.'
        },
        {
          q: 'Is it suitable for children?',
          a: 'Age and weight requirements are set by the operator; we do not confirm them. Ask on site.'
        }
      ]
    }
  },
  {
    group: 'inside',
    slug: 'suspension-bridge',
    related: ['zipline', 'viewpoints', 'al-ghaym-walkway', 'night-lights', 'photography'],
    ar: {
      h1: 'الجسور المعلقة في غابة رغدان',
      lead: 'قد تضم المرافق المطورة جسوراً معلقة كعنصر مشي تجريبي. نظراً لاختلاف الإتاحة، لا نؤكد وجود أو تشغيل جسر محدد؛ تأكد عند البوابة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'حذر الحقائق',
          paragraphs: [
            'من عناصر المشي المطورة في مواقع مشابهة قد توجد جسور معلقة، لكننا لم نتحقق من تشغيل ثابت لجسر محدد في الغابة. نعرضها كفئة ممكنة ولا نرجّح التوفر.',
            'سعة الجسر واشتراطات السلامة يحددها المشغّل.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'اسأل عن العناصر العاملة حالياً عند البوابة.',
            'احترم سعة الجسر وعدم التجمهر عليه.',
            'راقب حالة الطقس قبل العبور.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل يوجد جسر معلق في غابة رغدان؟',
          a: 'قد توجد جسور ضمن المرافق المطورة، لكننا لم نتحقق من تشغيل ثابت. تأكد عند البوابة عن العناصر العاملة.'
        },
        {
          q: 'هل العبور مجاني؟',
          a: 'الدخول للغابة مجاني عموماً؛ لكن تشغيل عنصر محدد قد يختلف. لا نؤكد تعرفة.'
        }
      ]
    },
    en: {
      h1: 'Suspension bridges at Raghadan Forest',
      lead: 'Developed facilities may include suspension bridges as an experimental walking element. Because availability varies, we do not confirm a specific bridge\'s presence or operation; verify at the gate.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Fact caution',
          paragraphs: [
            'Among developed walking elements at similar sites there may be suspension bridges, but we did not verify a fixed operation of a specific bridge in the forest. We present this as a possible category, not asserting availability.',
            'Bridge capacity and safety requirements are set by the operator.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Ask about currently operating elements at the gate.',
            'Respect bridge capacity and do not crowd it.',
            'Watch the weather before crossing.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is there a suspension bridge at Raghadan Forest?',
          a: 'There may be bridges within the developed facilities, but we did not verify a fixed operation. Verify at the gate about operating elements.'
        },
        {
          q: 'Is crossing free?',
          a: 'Forest entry is generally free; but operation of a specific element may differ. We do not confirm a tariff.'
        }
      ]
    }
  },
  {
    group: 'inside',
    slug: 'viewpoints',
    related: ['al-ghaym-walkway', 'photography', 'fog', 'sunset', 'juniper-nature'],
    ar: {
      h1: 'مطلات غابة رغدان',
      lead: 'غابة رغدان مكان طبيعي للإطلالة على منحدرات الباحة والسحب. اختر المطلات الآمنة المهيأة وتجنب الحواف غير المسيجة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'أين تجد الإطلالة؟',
          paragraphs: [
            'تتيح الغابة مستوى مرتفعاً فوق الباحة يجعلها مكاناً طبيعياً للإطلالة على المنحدرات والسحب والضباب. استخدم المطلات المهيأة ضمن المسارات المطورة.'
          ]
        },
        {
          heading: 'نصائح السلامة',
          bullets: [
            'ابتعد عن الحواف غير المسيجة.',
            'لا تتسلق الصخور بحثاً عن زاوية.',
            'راقب الأطفال قرب الحواف دائماً.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ما أفضل مطل في الغابة؟',
          a: 'استخدم المطلات المهيأة ضمن المسارات المطورة؛ لم نرشّح زاوية محددة دون تأكيد الإتاحة.'
        },
        {
          q: 'هل الإطلالة مضمونة في الضباب؟',
          a: 'لا؛ الضباب قد يخفي الإطلالة تماماً. تعامل معها كظاهرة غير مضمونة.'
        }
      ]
    },
    en: {
      h1: 'Raghadan Forest viewpoints',
      lead: 'Raghadan Forest is a natural place to overlook Al Bahah slopes and clouds. Choose safe, prepared overlooks and avoid unguarded edges.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Where to find the view',
          paragraphs: [
            'The forest\'s elevated level above Al Bahah makes it a natural place to overlook slopes, clouds and fog. Use the prepared overlooks within the developed trails.'
          ]
        },
        {
          heading: 'Safety tips',
          bullets: [
            'Stay away from unguarded edges.',
            'Do not climb rocks for an angle.',
            'Always watch children near edges.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What is the best viewpoint in the forest?',
          a: 'Use the prepared overlooks within the developed trails; we do not recommend a specific angle without confirming availability.'
        },
        {
          q: 'Is the view guaranteed in fog?',
          a: 'No; fog may hide the view entirely. Treat it as a non-guaranteed phenomenon.'
        }
      ]
    }
  },
  {
    group: 'inside',
    slug: 'waterfalls',
    related: ['viewpoints', 'fog', 'best-time', 'al-shafa-highlands', 'picnic'],
    ar: {
      h1: 'شلالات مؤقتة في غابة رغدان',
      lead: 'لا توجد شلالات دائمة مؤكدة، لكن المنحدرات تتحول إلى مجارٍ مائية مؤقتة بعد المطر. لا تفترض وجود شلال في كل زيارة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'حذر الحقائق',
          paragraphs: [
            'لم نتحقق من شلال دائم داخل الغابة. ما يُرى غالباً هو مجارٍ مائية مؤقتة على المنحدرات بعد هطول المطر، وهو أمر مرتبط بالطقس لا بموسم ثابت.',
            'المجارٍ المؤقتة قد تكون زلقة وخطرة؛ قرّبها من مسافة آمنة فقط.'
          ]
        },
        {
          heading: 'متى تراها؟',
          bullets: [
            'بعد أيام المطر القريبة.',
            'لا تفترض وجودها صيفاً دون مطر.',
            'ابتعد عن قاع المجاري والمنحدرات.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل يوجد شلال دائم في غابة رغدان؟',
          a: 'لم نتحقق من شلال دائم. ما يُرى عادة مجارٍ مائية مؤقتة بعد المطر، مرتبطة بالطقس لا بموسم ثابت.'
        },
        {
          q: 'متى أرى المياه المتدفقة؟',
          a: 'بعد هطول المطر القريب. لا تفترض تدفقاً صيفاً دون مطر.'
        }
      ]
    },
    en: {
      h1: 'Temporary waterfalls at Raghadan Forest',
      lead: 'There is no confirmed permanent waterfall, but slopes turn into temporary water courses after rain. Do not assume a waterfall on every visit.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Fact caution',
          paragraphs: [
            'We did not verify a permanent waterfall inside the forest. What is usually seen is temporary water courses on slopes after rainfall, tied to weather rather than a fixed season.',
            'Temporary courses can be slippery and dangerous; view them only from a safe distance.'
          ]
        },
        {
          heading: 'When to see them',
          bullets: [
            'After recent rainy days.',
            'Do not assume flow in summer without rain.',
            'Stay away from the base of courses and slopes.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is there a permanent waterfall in Raghadan Forest?',
          a: 'We did not verify a permanent waterfall. What is usually seen is temporary water courses after rain, tied to weather not a fixed season.'
        },
        {
          q: 'When do I see flowing water?',
          a: 'After recent rainfall. Do not assume flow in summer without rain.'
        }
      ]
    }
  },
  {
    group: 'inside',
    slug: 'night-lights',
    related: ['sunset', 'evening-coffee', 'picnic', 'bahjat-raghadan', 'crowds'],
    ar: {
      h1: 'إضاءة الغابة ليلاً',
      lead: 'تُضاء المناطق المطورة في أمسيات الصيف والمناسبات، لكن الإضاءة والأنشطة الليلية غير مضمونة طوال العام. تحقق من الإتاحة عند الوصول.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'حذر الحقائق',
          paragraphs: [
            'ذُكرت الغابة ضمن وجهات الإضاءة والفعاليات في أمسيات الصيف والمناسبات، لكننا لم نتحقق من جدول إضاءة ثابت طوال العام.',
            'ظروف الطقس والصيانة قد توقف الإضاءة; لا تفترض إضاءة مضمونة في كل زيارة.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'تأكد من ساعات الدخول قبل التخطيط لأمسية.',
            'فضّل المناطق المضاءة والمأهولة.',
            'احرص على الإشراف مع الأطفال ليلاً.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل تُضاء غابة رغدان ليلاً؟',
          a: 'تُضاء المناطق المطورة في أمسيات الصيف والمناسبات، لكن الإضاءة غير مضمونة طوال العام. تحقق من الإتاحة عند الوصول.'
        },
        {
          q: 'هل يوجد فعاليات ليلية؟',
          a: 'لم نتحقق من جدول فعاليات ثابت. راقب الإعلان الرسمي وقت زيارتك.'
        }
      ]
    },
    en: {
      h1: 'Night lighting in the forest',
      lead: 'Developed areas are lit on summer evenings and occasions, but night lighting and activities are not guaranteed year-round. Check availability on arrival.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Fact caution',
          paragraphs: [
            'The forest is mentioned among lit and event destinations on summer evenings and occasions, but we did not verify a fixed lighting schedule year-round.',
            'Weather and maintenance may stop lighting; do not assume guaranteed lighting on every visit.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Confirm entry hours before planning an evening.',
            'Prefer lit and populated areas.',
            'Keep supervision with children at night.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Raghadan Forest lit at night?',
          a: 'Developed areas are lit on summer evenings and occasions, but lighting is not guaranteed year-round. Check availability on arrival.'
        },
        {
          q: 'Are there night events?',
          a: 'We did not verify a fixed events schedule. Watch the official announcement at travel time.'
        }
      ]
    }
  },
  {
    group: 'inside',
    slug: 'juniper-nature',
    related: ['viewpoints', 'photography', 'fog', 'al-shafa-highlands', 'nature-heritage'],
    ar: {
      h1: 'العرعر وطبيعة الباحة في غابة رغدان',
      lead: 'العرعر عنصر بارز في غطاء المرتفعات حول الباحة. الغابة جزء من مشهد جبلي يجمع بين الضباب والأشجار والمنحدرات.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'لماذا العرعر مميز؟',
          paragraphs: [
            'يُعد العرعر من العناصر النباتية البارزة في غطاء مرتفعات الباحة والسراة عموماً. غابة رغدان تندرج ضمن هذا المشهد الجبلي الذي يجمع بين الضباب والأشجار والمنحدرات.'
          ]
        },
        {
          heading: 'نصائح للاستمتاع',
          bullets: [
            'اقرأ اللوحات التعريفية إن وُجدت.',
            'لا تقتطع أغصاناً أو نباتات.',
            'احترم المسارات المهيأة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل تكثر أشجار العرعر في الغابة؟',
          a: 'العرعر عنصر بارز في غطاء مرتفعات الباحة؛ الغابة جزء من هذا المشهد الجبلي، لكن كثافة الأشجار تتغير مكانياً.'
        },
        {
          q: 'هل يوجد مسار تفسير طبيعي؟',
          a: 'لم نتحقق من مسار تفسير مخصص. راقب اللوحات التعريفية عند الوصول.'
        }
      ]
    },
    en: {
      h1: 'Juniper and Al Bahah nature at Raghadan Forest',
      lead: 'Juniper is a prominent element of the highland cover around Al Bahah. The forest is part of a mountainous scene blending fog, trees and slopes.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Why juniper is special',
          paragraphs: [
            'Juniper is among the prominent plant elements in the highland cover of Al Bahah and the Sarat generally. Raghadan Forest falls within this mountainous scene that blends fog, trees and slopes.'
          ]
        },
        {
          heading: 'Enjoyment tips',
          bullets: [
            'Read interpretive signs if present.',
            'Do not cut branches or plants.',
            'Respect prepared trails.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are juniper trees abundant in the forest?',
          a: 'Juniper is a prominent element of the Al Bahah highland cover; the forest is part of this mountainous scene, but tree density varies locally.'
        },
        {
          q: 'Is there a nature-interpretation trail?',
          a: 'We did not verify a dedicated interpretation trail. Watch for interpretive signs on arrival.'
        }
      ]
    }
  },
  {
    group: 'inside',
    slug: 'photography',
    related: ['viewpoints', 'fog', 'sunset', 'lavender-walkway', 'al-ghaym-walkway'],
    ar: {
      h1: 'التصوير في غابة رغدان',
      lead: 'الغابة مشهد مصوّر ممتاز للضباب والسحب والمنحدرات. خطط للضوء الصباحي أو الغروب، واحترم خصوصية الزوار.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'أفضل أوقات التصوير',
          paragraphs: [
            'الضوء الصباحي والغروب يبرزان الضباب والسحب فوق المنحدرات. الضباب غير مضمون، لذا كن مستعداً في أي وقت صافٍ أيضاً.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'استخدم المطلات المهيأة لتفادي الحواف.',
            'لا تصوّر الزوار عن قرب دون إذن.',
            'احرص على الإشراف مع الأطفال والكاميرا.'
          ]
        }
      ],
      faqs: [
        {
          q: 'متى ألتقط أجمل صور للضباب؟',
          a: 'الضباب غير مضمون، لكن الصباح الباكر يزيد فرصته فوق المنحدرات. كن مستعداً في الأيام الرطبة.'
        },
        {
          q: 'هل التصوير مجاني؟',
          a: 'التصوير الشخصي ضمن الزيارة مجاني عموماً. احترم خصوصية الآخرين.'
        }
      ]
    },
    en: {
      h1: 'Photography at Raghadan Forest',
      lead: 'The forest is an excellent photo scene for fog, clouds and slopes. Plan for morning or sunset light, and respect visitor privacy.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Best shooting times',
          paragraphs: [
            'Morning and sunset light bring out fog and clouds above the slopes. Fog is not guaranteed, so be ready also on any clear moment.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Use prepared overlooks to avoid edges.',
            'Do not photograph visitors up close without permission.',
            'Keep supervision with children and the camera.'
          ]
        }
      ],
      faqs: [
        {
          q: 'When do I get the best fog photos?',
          a: 'Fog is not guaranteed, but early morning raises its chance above the slopes. Be ready on humid days.'
        },
        {
          q: 'Is photography free?',
          a: 'Personal photography within the visit is generally free. Respect others\' privacy.'
        }
      ]
    }
  },
  {
    group: 'inside',
    slug: 'picnic',
    related: ['with-kids', 'family-meals', 'supplies', 'restrooms-prayer', 'nature-heritage'],
    ar: {
      h1: 'النزهة في غابة رغدان',
      lead: 'تتوفر مساحات خضراء ومقاعد تصلح للجلوس والنزهة. التزم بالأماكن المسموح بها ولا تترك نفايات.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'أين تجلس؟',
          paragraphs: [
            'تشير البيانات المنشورة إلى مساحات خضراء ومقاعد وممرات ضمن الغابة. استخدم المساحات المهيأة للجلوس بدلاً من الأماكن الحساسة بيئياً.'
          ]
        },
        {
          heading: 'آداب النزهة',
          bullets: [
            'لا تترك نفايات؛ خذها معك.',
            'لا تشعل ناراً مفتوحة.',
            'احترم المسارات والمساحات الممنوعة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل يسمح بالنزهة في الغابة؟',
          a: 'نعم في المساحات المهيأة؛ المساحات الخضراء والمقاعد تصلح للجلوس. التزم بالأماكن المسموح بها.'
        },
        {
          q: 'هل يوجد طاولات نزهة؟',
          a: 'لم نتحقق من طاولات مخصصة؛ استخدم المقاعد والمساحات المهيأة المتاحة.'
        }
      ]
    },
    en: {
      h1: 'Picnic at Raghadan Forest',
      lead: 'There are green spaces and seating suitable for sitting and a picnic. Use allowed spots and leave no litter.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Where to sit',
          paragraphs: [
            'Published data points to green spaces, benches and trails within the forest. Use the prepared seating areas instead of ecologically sensitive spots.'
          ]
        },
        {
          heading: 'Picnic etiquette',
          bullets: [
            'Leave no litter; take it with you.',
            'Do not light open fires.',
            'Respect trails and prohibited areas.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is picnicking allowed in the forest?',
          a: 'Yes in prepared areas; green spaces and benches suit sitting. Stick to allowed spots.'
        },
        {
          q: 'Are there picnic tables?',
          a: 'We did not verify dedicated tables; use the available benches and prepared spaces.'
        }
      ]
    }
  }
];
