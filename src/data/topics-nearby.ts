import type { Topic } from './topics-types';
import { UPDATED_AR, UPDATED_EN } from './topics-types';

export const NEARBY_TOPICS: Topic[] = [
  {
    group: 'nearby',
    slug: 'prince-hussam-park',
    related: ['prince-mohammed-park', 'al-khairah-forest', 'one-day-al-baha', 'nature-heritage', 'restaurants'],
    ar: {
      h1: 'منتزه الأمير حسام (قرب غابة رغدان)',
      lead: 'يُذكر منتزه الأمير حسام ضمن وجهات الباحة الخضراء. لم نتحقق من تفاصيل ثابتة للمرافق وساعاته؛ راجع المحلي عند الزيارة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما نعرفه',
          paragraphs: [
            'يُدرج منتزه الأمير حسام ضمن الوجهات الخضراء والمتنزهات في الباحة. لم نتحقق من مساحة أو مرافق أو ساعات تشغيل ثابتة، لذا نعرضه كوجهة عامة فقط.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'ادمجه مع زيارة الغابة في يوم واحد إن رغبت.',
            'راجع ساعات الدخول والمواقع الحالية.',
            'تأكد من الإتاحة قبل الاعتماد عليه في الخطة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ما مساحة أو مرافق منتزه الأمير حسام؟',
          a: 'لم نتحقق من تفاصيل ثابتة. يُذكر ضمن وجهات الباحة الخضراء؛ راجع المحلي عند الزيارة.'
        },
        {
          q: 'هل هو قريب من غابة رغدان؟',
          a: 'كلاهما ضمن منطقة الباحة؛ المسافة الدقيقة تتغير حسب المسار. راجع الخرائط المحدّثة.'
        }
      ]
    },
    en: {
      h1: 'Prince Hussam Park (near Raghadan Forest)',
      lead: 'Prince Hussam Park is listed among Al Bahah\'s green destinations. We did not verify fixed details of its facilities or hours; check locally on a visit.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What we know',
          paragraphs: [
            'Prince Hussam Park is listed among Al Bahah\'s green destinations and parks. We did not verify a fixed area, facilities or operating hours, so we present it only as a general destination.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Combine it with a forest visit in one day if you wish.',
            'Check entry hours and current locations.',
            'Confirm availability before relying on it in the plan.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What is the area or facilities of Prince Hussam Park?',
          a: 'We did not verify fixed details. It is listed among Al Bahah\'s green destinations; check locally on a visit.'
        },
        {
          q: 'Is it close to Raghadan Forest?',
          a: 'Both are within the Al Bahah area; the exact distance varies by route. Check updated maps.'
        }
      ]
    }
  },
  {
    group: 'nearby',
    slug: 'prince-mohammed-park',
    related: ['prince-hussam-park', 'al-khairah-forest', 'one-day-al-baha', 'nature-heritage', 'restaurants'],
    ar: {
      h1: 'منتزه الأمير محمد (قرب غابة رغدان)',
      lead: 'يُذكر منتزه الأمير محمد ضمن متنزهات الباحة. لم نتحقق من تفاصيل ثابتة؛ راجع المحلي وتأكد من الإتاحة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما نعرفه',
          paragraphs: [
            'يُدرج منتزه الأمير محمد ضمن متنزهات الباحة. لم نتحقق من مرافق أو ساعات ثابتة.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'راجع المواقع الحالية وساعات الدخول.',
            'ادمجه مع زيارة الغابة إن رغبت.',
            'لا تفترض إتاحة كل المرافق في كل وقت.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ما مرافق منتزه الأمير محمد؟',
          a: 'لم نتحقق من تفاصيل ثابتة. يُذكر ضمن متنزهات الباحة؛ راجع المحلي.'
        }
      ]
    },
    en: {
      h1: 'Prince Mohammed Park (near Raghadan Forest)',
      lead: 'Prince Mohammed Park is listed among Al Bahah\'s parks. We did not verify fixed details; check locally and confirm availability.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What we know',
          paragraphs: [
            'Prince Mohammed Park is listed among Al Bahah\'s parks. We did not verify fixed facilities or hours.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Check current locations and entry hours.',
            'Combine with a forest visit if you wish.',
            'Do not assume all facilities are available at all times.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What are Prince Mohammed Park\'s facilities?',
          a: 'We did not verify fixed details. It is listed among Al Bahah\'s parks; check locally.'
        }
      ]
    }
  },
  {
    group: 'nearby',
    slug: 'al-shafa-highlands',
    related: ['al-khairah-forest', 'fog', 'juniper-nature', 'best-time', 'one-day-al-baha'],
    ar: {
      h1: 'مرتفعات الشفا (قرب غابة رغدان)',
      lead: 'الشفا المرتفعات الأعلى جنوب الباحة، تشتهر بالضباب والمناظر الجبلية. الوصول عبر طريق جبلي؛ راقب الضباب والمنعطفات.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما تتوقعه',
          paragraphs: [
            'تُعد الشفا من المرتفعات الأعلى جنوب الباحة، وتشتهر بأجواء الضباب والمناظر الجبلية. الوصول يتم عبر طريق جبلي.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'ادخل الإحداثيات واستخدم خرائط الزوار.',
            'خفف السرعة وانتبه للضباب.',
            'لا تفترض إتاحة مرافق محددة دون تأكيد.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل الشفا قريبة من غابة رغدان؟',
          a: 'كلاهما ضمن منطقة الباحة المرتفعة؛ المسافة الدقيقة تتغير حسب المسار. راجع الخرائط.'
        },
        {
          q: 'متى أزور الشفا؟',
          a: 'الضباب ظاهرة متكررة لكنها غير مضمونة. راجع الطقس وخطط بمرونة.'
        }
      ]
    },
    en: {
      h1: 'Al Shafa highlands (near Raghadan Forest)',
      lead: 'Al Shafa is the higher highland south of Al Bahah, known for fog and mountain views. Access is via a mountain road; watch for fog and curves.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What to expect',
          paragraphs: [
            'Al Shafa is the higher highland south of Al Bahah, known for fog weather and mountain scenery. Access is via a mountain road.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Enter coordinates and use visitor maps.',
            'Slow down and mind the fog.',
            'Do not assume specific facilities without confirmation.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Al Shafa close to Raghadan Forest?',
          a: 'Both are within the elevated Al Bahah area; the exact distance varies by route. Check maps.'
        },
        {
          q: 'When to visit Al Shafa?',
          a: 'Fog is frequent but not guaranteed. Check the weather and plan flexibly.'
        }
      ]
    }
  },
  {
    group: 'nearby',
    slug: 'al-khairah-forest',
    related: ['prince-hussam-park', 'prince-mohammed-park', 'al-shafa-highlands', 'nature-heritage', 'one-day-al-baha'],
    ar: {
      h1: 'غابة الخيرة (قرب غابة رغدان)',
      lead: 'تُذكر غابة الخيرة ضمن غابات ومتنزهات الباحة. لم نتحقق من تفاصيل ثابتة؛ راجع المحلي وتأكد من الإتاحة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما نعرفه',
          paragraphs: [
            'تُدرج غابة الخيرة ضمن الغابات والمتنزهات في منطقة الباحة. لم نتحقق من مرافق أو ساعات ثابتة.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'راجع المواقع الحالية وساعات الدخول.',
            'ادمجها مع زيارة الغابة إن رغبت في جولة غابات.',
            'لا تفترض إتاحة كل المرافق.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ما مرافق غابة الخيرة؟',
          a: 'لم نتحقق من تفاصيل ثابتة. تُذكر ضمن غابات الباحة؛ راجع المحلي.'
        }
      ]
    },
    en: {
      h1: 'Al Khairah Forest (near Raghadan Forest)',
      lead: 'Al Khairah Forest is listed among Al Bahah\'s forests and parks. We did not verify fixed details; check locally and confirm availability.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What we know',
          paragraphs: [
            'Al Khairah Forest is listed among the forests and parks of the Al Bahah region. We did not verify fixed facilities or hours.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Check current locations and entry hours.',
            'Combine it with a forest visit for a forests tour if you wish.',
            'Do not assume all facilities are available.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What are Al Khairah Forest\'s facilities?',
          a: 'We did not verify fixed details. It is listed among Al Bahah\'s forests; check locally.'
        }
      ]
    }
  },
  {
    group: 'nearby',
    slug: 'dhee-ayn-village',
    related: ['al-shafa-highlands', 'nature-heritage', 'one-day-al-baha', 'prince-hussam-park', 'from-airport'],
    ar: {
      h1: 'قرية ذي عين التراثية (قرب غابة رغدان)',
      lead: 'ذي عين قرية تراثية في منطقة الباحة معروفة ببيوتها الحجرية وعين الماء. لم نتحقق من ساعات زيارة ثابتة؛ راجع المحلي.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما نعرفه',
          paragraphs: [
            'تُعد ذي عين قرية تراثية في منطقة الباحة، معروفة ببيوتها الحجرية وعين الماء. تُذكر ضمن الوجهات الثقافية القريبة من الغابة.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'ادمجها مع زيارة الغابة في يوم واحد.',
            'راجع ساعات الزيارة والمواقع الحالية.',
            'احترم طابع المكان التراثي والمقيمين.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل ذي عين قريبة من غابة رغدان؟',
          a: 'كلاهما ضمن منطقة الباحة؛ المسافة الدقيقة تتغير حسب المسار. راجع الخرائط المحدّثة.'
        },
        {
          q: 'ما ساعات زيارة القرية؟',
          a: 'لم نتحقق من ساعات ثابتة. راجع المحلي عند الزيارة.'
        }
      ]
    },
    en: {
      h1: 'Dhee Ain heritage village (near Raghadan Forest)',
      lead: 'Dhee Ain is a heritage village in the Al Bahah region known for its stone houses and water spring. We did not verify fixed visiting hours; check locally.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What we know',
          paragraphs: [
            'Dhee Ain is a heritage village in the Al Bahah region, known for its stone houses and water spring. It is mentioned among the cultural destinations near the forest.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Combine it with a forest visit in one day.',
            'Check visiting hours and current locations.',
            'Respect the village\'s heritage character and residents.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Dhee Ain close to Raghadan Forest?',
          a: 'Both are within the Al Bahah region; the exact distance varies by route. Check updated maps.'
        },
        {
          q: 'What are the village visiting hours?',
          a: 'We did not verify fixed hours. Check locally on a visit.'
        }
      ]
    }
  }
];
