import type { Topic } from './topics-types';
import { UPDATED_AR, UPDATED_EN } from './topics-types';

export const VISIT_TOPICS: Topic[] = [
  {
    group: 'visit',
    slug: 'opening-hours',
    related: ['parking', 'duration', 'crowds', 'best-time', 'from-airport'],
    ar: {
      h1: 'ساعات زيارة غابة رغدان: بين مصدرين مختلفين',
      lead: 'لا يوجد رقم ساعات واحد متفق عليه. تذكر «روح السعودية» 08:00–00:00، بينما يظهر إدراج خرائط جوجل 14:00–02:00 من اليوم التالي. عليك التحقق قبل السفر.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'لماذا تختلف المصادر؟',
          paragraphs: [
            'عند المراجعة في 30 أكتوبر 2026، وجدنا تضارباً بين جهتين: «روح السعودية» تورد 08:00–00:00، وإدراج خرائط جوجل يورد 14:00–02:00 من اليوم التالي. هذا لا يعني خطأ أحدهما بقدر ما يعكس تحديثاً زمنياً أو نطاقاً مختلفاً للتشغيل.',
            'لذلك نعرض المصدرين معاً ولا نرجّح أحدهما كحقيقة مطلقة، وننصح بالتأكيد عند البوابة أو عبر القنوات الرسمية قبل تثبيت موعد الزيارة.'
          ]
        },
        {
          heading: 'نصيحة عملية',
          bullets: [
            'لا تفترض إتاحة الزيارة صباحاً أو ليلاً دون تأكيد مسبق.',
            'راقب الإعلان الرسمي في المواسم والأعياد، فقد تتغير ساعات الفعاليات والأنشطة.',
            'خصص وقتاً إضافياً للوصول قبل إغلاق البوابة المقصودة لتجنب العودة دون دخول.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ما ساعات فتح غابة رغدان الرسمية؟',
          a: 'لا يوجد رقم موحد متفق عليه. «روح السعودية» تورد 08:00–00:00، وخرائط جوجل تورد 14:00–02:00 من اليوم التالي. تأكد عند البوابة قبل السفر.'
        },
        {
          q: 'هل يمكن زيارة الغابة فجراً؟',
          a: 'المصادر تختلف؛ لذلك لا نفترض إتاحة الفجر. راجع التشغيل المعلن حالياً ولا تعتمد على ساعات قديمة.'
        },
        {
          q: 'هل تتغير الساعات في رمضان أو الأعياد؟',
          a: 'لم نتحقق من جدول مواسم محدد. أيام الإجازات والأعياد قد تشهد تغييراً في ساعات أو إتاحة، لذا راجع القناة الرسمية وقت زيارتك.'
        }
      ]
    },
    en: {
      h1: 'Raghadan Forest opening hours: two conflicting sources',
      lead: 'There is no single agreed hour. Visit Saudi lists 08:00–00:00, while the Google Maps listing shows 14:00–02:00 the following day. Confirm before traveling.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Why the sources differ',
          paragraphs: [
            'Checked on 30 October 2026, we found a conflict between two references: Visit Saudi states 08:00–00:00, while the Google Maps listing shows 14:00–02:00 the following day. This reflects a time or scope difference in operation rather than one being wrong.',
            'We present both and do not favor one as absolute. Verify at the gate or through the official channel before fixing your visit time.'
          ]
        },
        {
          heading: 'Practical tip',
          bullets: [
            'Do not assume morning or late-night entry without prior confirmation.',
            'Watch the official announcement in seasons and holidays; event hours may differ.',
            'Allow extra arrival time before the intended gate closes to avoid a wasted trip.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What are the official Raghadan Forest opening hours?',
          a: 'There is no unified agreed number. Visit Saudi lists 08:00–00:00, and Google Maps lists 14:00–02:00 the following day. Confirm at the gate before traveling.'
        },
        {
          q: 'Can I visit the forest at dawn?',
          a: 'Sources conflict, so we do not assume dawn access. Check the currently published operation and do not rely on older hours.'
        },
        {
          q: 'Do hours change in Ramadan or holidays?',
          a: 'We did not verify a specific seasonal schedule. Holidays may change hours or availability, so check the official channel at travel time.'
        }
      ]
    }
  },
  {
    group: 'visit',
    slug: 'parking',
    related: ['opening-hours', 'accessibility', 'crowds', 'from-airport', 'taxi-return'],
    ar: {
      h1: 'مواقف سيارات غابة رغدان: سعة كبيرة لكن الذروة مزدحمة',
      lead: 'تشير البيانات المنشورة إلى 1,230 موقفاً، منها 42 موقفاً مهيأً لذوي الإعاقة. السعة كبيرة، لكن الحركة تبطؤ في أمسيات الصيف وعطلات نهاية الأسبوع.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'الأرقام المنشورة',
          paragraphs: [
            'ورد في تقرير وكالة الأنباء السعودية بتاريخ 13 يونيو 2026 أن الغابة تضم 1,230 موقفاً للمركبات، منها 42 موقفاً مهيأً لذوي الإعاقة. هذه أرقام خدمية عامة، لا تعني أن كل موقف متاح في كل لحظة.'
          ]
        },
        {
          heading: 'نصائح للوصول',
          bullets: [
            'تعال مبكراً أو بعد العصر لتقليل الزحام عند المداخل والمطلات.',
            'لا توقف على حواف غير مهيأة أو في مسار طوارئ، خصوصاً أثناء الضباب أو المطر.',
            'تأكد من ساعات الدخول أولاً، فالمواقف لا تفيد إن كانت البوابة مغلقة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل مواقف غابة رغدان مجانية؟',
          a: 'لم نعثر في المصادر الرسمية التي راجعناها على تعرفة ثابتة منشورة للمواقف. لا نفترض أنها مجانية أو مدفوعة؛ تحقق من اللوحات عند الوصول.'
        },
        {
          q: 'هل توجد مواقف مهيأة لذوي الإعاقة؟',
          a: 'نعم، تشير البيانات المنشورة إلى 42 موقفاً مهيأً ضمن إجمالي 1,230 موقفاً.'
        },
        {
          q: 'متى يكون الموقف مزدحماً؟',
          a: 'في أمسيات الصيف وعطلات نهاية الأسبوع تتباطأ الحركة قرب المداخل والمطلات. التعامل مع الزيارة كجزء من خطة مبكرة يخفف ذلك.'
        }
      ]
    },
    en: {
      h1: 'Raghadan Forest parking: large capacity, crowded at peak',
      lead: 'Published data indicates 1,230 spaces, including 42 adapted for people with disabilities. Capacity is large, but movement slows on summer evenings and weekend holidays.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Published figures',
          paragraphs: [
            'The Saudi Press Agency report of 13 June 2026 states the forest has 1,230 vehicle parking spaces, including 42 adapted for people with disabilities. These are general service figures, not a guarantee that every bay is available at every moment.'
          ]
        },
        {
          heading: 'Arrival tips',
          bullets: [
            'Arrive early or after noon to reduce crowding at gates and overlooks.',
            'Do not park on unprepared edges or in an emergency lane, especially during fog or rain.',
            'Confirm entry hours first; parking is useless if the gate is closed.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Raghadan Forest parking free?',
          a: 'We found no fixed published tariff for the parking in the official sources we reviewed. We do not assume it is free or paid; check the signs on arrival.'
        },
        {
          q: 'Are there disabled-adapted parking bays?',
          a: 'Yes, published data indicates 42 adapted bays within the total of 1,230 spaces.'
        },
        {
          q: 'When is the parking crowded?',
          a: 'On summer evenings and weekend holidays movement slows near gates and overlooks. Treating arrival as part of an early plan eases it.'
        }
      ]
    }
  },
  {
    group: 'visit',
    slug: 'duration',
    related: ['opening-hours', 'with-kids', 'picnic', 'two-hours', 'half-day-family'],
    ar: {
      h1: 'كم تستغرق زيارة غابة رغدان؟',
      lead: 'للمشاهدة والمشي الهادئ، خصص عادةً من ساعتين إلى أربع ساعات. قد تمتد الزيارة إلى نصف يوم للعائلات أو للنزهة.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'إطار زمني مقترح',
          paragraphs: [
            'لا توجد مدة إلزامية، لكن الزيارة الاعتيادية للمشاهدة والمشي الهادئ تتراوح عادة بين ساعتين وأربع ساعات. العائلات التي تريد اللعب والجلوس قد تحتاج إلى نصف يوم.',
            'من يريد الإطلالة والتصوير فقط يمكن أن يكتفي بزيارة أقصر، بشرط أن تكون ضمن ساعات الدخول المؤكدة.'
          ]
        },
        {
          heading: 'ما الذي يزيد المدة؟',
          bullets: [
            'مناطق الألعاب والجلوس للعائلات.',
            'جولة تصوير عند المطلات الآمنة.',
            'النزهة أو الوجبة الخفيفة ضمن المواقع المسموح بها.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل ساعتان تكفيان لرؤية الغابة؟',
          a: 'ساعتان إلى أربع ساعات كافية للمشاهدة والمشي الهادئ. إن أردت اللعب مع الأطفال أو النزهة، خطط لنصف يوم.'
        },
        {
          q: 'هل يمكن زيارة الغابة سريعاً لالتقاط الصور؟',
          a: 'نعم، زيارة أقصر تكفي لمن يريد الإطلالة والتصوير فقط، ضمن ساعات الدخول المؤكدة.'
        }
      ]
    },
    en: {
      h1: 'How long does a Raghadan Forest visit take?',
      lead: 'For sightseeing and relaxed walking, plan usually two to four hours. A family or picnic visit can extend to half a day.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Suggested time frame',
          paragraphs: [
            'There is no required duration, but a typical sightseeing and relaxed walk usually runs two to four hours. Families wanting play and seating may need half a day.',
            'Those who only want the view and photos can manage a shorter stop, provided it is within confirmed opening hours.'
          ]
        },
        {
          heading: 'What lengthens the visit?',
          bullets: [
            'Playgrounds and seating areas for families.',
            'A photo tour at safe overlooks.',
            'A picnic or light meal within allowed spots.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are two hours enough to see the forest?',
          a: 'Two to four hours are enough for sightseeing and relaxed walking. If you want play with children or a picnic, plan half a day.'
        },
        {
          q: 'Can I visit quickly just for photos?',
          a: 'Yes, a shorter stop is enough for those who only want the view and photos, within confirmed opening hours.'
        }
      ]
    }
  },
  {
    group: 'visit',
    slug: 'with-kids',
    related: ['duration', 'accessibility', 'restrooms-prayer', 'picnic', 'half-day-family'],
    ar: {
      h1: 'زيارة غابة رغدان مع الأطفال',
      lead: 'الغابة مناسبة للعائلات بفضل المساحات الخضراء ومناطق الألعاب والمقاعد. الإشراف المباشر ضروري بسبب الطبيعة الجبلية والحواف.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'لماذا هي مناسبة للعائلات؟',
          paragraphs: [
            'تشير بيانات أمانة المنطقة ووكالة الأنباء السعودية إلى مساحات خضراء ومناطق ألعاب وممرات ومقاعد وخدمات عامة. تضم الغابة 14 منطقة ألعاب بحسب البيانات المنشورة.'
          ]
        },
        {
          heading: 'نقاط السلامة',
          bullets: [
            'احرص على الإشراف المباشر قرب الحواف والمنحدرات والمناطق المائية.',
            'ابدأ من المناطق المطورة القريبة من المواقف ومناطق الجلوس.',
            'تجنب ذروة الزحام بزيارة مبكرة أو بعد العصر.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل غابة رغدان مناسبة للأطفال؟',
          a: 'نعم؛ توجد مساحات خضراء ومناطق ألعاب ومقاعد. يبقى الإشراف المباشر ضرورياً بسبب الطبيعة الجبلية والحواف.'
        },
        {
          q: 'كم منطقة ألعاب للأطفال في الغابة؟',
          a: 'تشير البيانات المنشورة إلى 14 منطقة ألعاب، إلى جانب مساحات مفتوحة وممرات.'
        },
        {
          q: 'هل توجد عربات أو خدمات للرضع؟',
          a: 'لم نتحقق من خدمات مخصصة للرضع؛ راجع المتاح عند الوصول وخطط بحسب قدرة التحرك مع الأطفال.'
        }
      ]
    },
    en: {
      h1: 'Visiting Raghadan Forest with children',
      lead: 'The forest suits families thanks to green spaces, playgrounds and seating. Direct supervision remains essential because of mountainous terrain and edges.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Why it suits families',
          paragraphs: [
            'Data from the Al Bahah municipality and the Saudi Press Agency point to green spaces, playgrounds, trails, seating and public services. The forest has 14 playground areas per published data.'
          ]
        },
        {
          heading: 'Safety points',
          bullets: [
            'Keep direct supervision near edges, slopes and any water features.',
            'Start from developed areas near parking and seating.',
            'Avoid peak crowding with an early or after-noon visit.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is Raghadan Forest suitable for children?',
          a: 'Yes; there are green spaces, playgrounds and seating. Direct supervision remains essential because of the mountainous terrain and edges.'
        },
        {
          q: 'How many playground areas are in the forest?',
          a: 'Published data indicates 14 playground areas, plus open spaces and trails.'
        },
        {
          q: 'Are there stroller or infant services?',
          a: 'We did not verify dedicated infant services; check what is available on arrival and plan by your mobility with children.'
        }
      ]
    }
  },
  {
    group: 'visit',
    slug: 'accessibility',
    related: ['parking', 'restrooms-prayer', 'with-kids', 'night-lights', 'viewpoints'],
    ar: {
      h1: 'إتاحة الحركة في غابة رغدان',
      lead: 'توجد مواقف مخصصة لذوي الإعاقة وبعض المسارات والخدمات المطورة، لكن التضاريس جبلية وفيها فروق ارتفاع. راجع المسار المقصود عند الوصول.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'ما هو متاح؟',
          paragraphs: [
            'تشير البيانات المنشورة إلى 42 موقفاً مهيأً لذوي الإعاقة ضمن المواقف، وإلى بعض المسارات والمساحات المطورة. لكن طبيعة الغابة جبلية وفيها فروق ارتفاع.'
          ]
        },
        {
          heading: 'نصيحة للحركة المحدودة',
          bullets: [
            'اسأل عن المسار المهيأ المتاح حالياً؛ لم نتحقق من مسار متصل خالٍ من الدرج.',
            'وزّع الراحة عند المقاعد والمناطق المظللة.',
            'فضّل المناطق المعبدة وابتعد عن المسارات شديدة الانحدار.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل الغابة مناسبة للكراسي المتحركة؟',
          a: 'توجد مواقف مهيأة وبعض المسارات المطورة، لكن الغابة جبلية بفروق ارتفاع. راجع المسار المقصود عند الوصول ويفضّل المناطق المعبدة.'
        },
        {
          q: 'هل يوجد مسار خالٍ من الدرج؟',
          a: 'لم نتحقق من مسار متصل خالٍ من الدرج. اسأل عند الوصول عن المسار المهيأ المتاح حالياً.'
        }
      ]
    },
    en: {
      h1: 'Accessibility at Raghadan Forest',
      lead: 'There are designated disabled parking bays and some developed, paved paths and services, but the terrain is mountainous with elevation changes. Check the intended trail on arrival.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'What is available',
          paragraphs: [
            'Published data indicates 42 adapted parking bays within the total, and some developed trails and spaces. But the forest is mountainous with elevation changes.'
          ]
        },
        {
          heading: 'Tips for limited mobility',
          bullets: [
            'Ask which adapted route is currently accessible; we have not verified a continuous step-free route.',
            'Distribute rest at benches and shaded areas.',
            'Prefer paved areas and avoid steep or unprepared trails.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is the forest suitable for wheelchairs?',
          a: 'There are designated disabled bays and some developed, paved paths, but the terrain is mountainous with elevation changes. Check the intended trail on arrival and prefer paved areas.'
        },
        {
          q: 'Is there a step-free route?',
          a: 'We have not verified a continuous step-free route. Ask on arrival about the adapted route currently available.'
        }
      ]
    }
  },
  {
    group: 'visit',
    slug: 'restrooms-prayer',
    related: ['parking', 'accessibility', 'with-kids', 'crowds', 'opening-hours'],
    ar: {
      h1: 'دورات المياه وموقع الصلاة في غابة رغدان',
      lead: 'تضم الغابة 122 دورة مياه بحسب تقرير واس (13 يونيو 2026)، وتشير الأمانة إلى موقع مخصص للصلاة ضمن المرافق. قد تتغير إتاحة بعض المرافق بسبب الصيانة أو الازدحام.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'الأرقام المنشورة',
          paragraphs: [
            'ورد في تقرير وكالة الأنباء السعودية بتاريخ 13 يونيو 2026 أن الغابة تضم 122 دورة مياه. كما تشير أمانة المنطقة إلى وجود موقع مخصص للصلاة ضمن مرافق الغابة.'
          ]
        },
        {
          heading: 'نصيحة عند الازدحام',
          bullets: [
            'عند الازدحام، استخدم دورات المياه الأقرب إلى المناطق الخدمية الرئيسية.',
            'خطط للصلاة ضمن ساعات الدخول المؤكدة.',
            'راعَ أن بعض المرافق قد يكون مؤقتاً خارج الخدمة للصيانة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل توجد دورات مياه في غابة رغدان؟',
          a: 'نعم، تذكر البيانات المنشورة 122 دورة مياه (تقرير واس 13 يونيو 2026). قد تتغير الإتاحة بسبب الصيانة أو الازدحام.'
        },
        {
          q: 'هل يوجد مكان مخصص للصلاة؟',
          a: 'تشير أمانة المنطقة إلى وجود موقع مخصص للصلاة ضمن مرافق الغابة.'
        }
      ]
    },
    en: {
      h1: 'Restrooms and a prayer site at Raghadan Forest',
      lead: 'The forest has 122 restrooms per the SPA report (13 June 2026), and the municipality indicates a designated prayer site within the facilities. Some facilities may change availability due to maintenance or crowding.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Published figures',
          paragraphs: [
            'The Saudi Press Agency report of 13 June 2026 states the forest has 122 restrooms. The municipality also indicates a designated prayer site within the forest facilities.'
          ]
        },
        {
          heading: 'Tip during crowding',
          bullets: [
            'During crowding, use restrooms closest to the main service areas.',
            'Plan prayer within confirmed opening hours.',
            'Account that some facilities may be temporarily out for maintenance.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Are there restrooms at Raghadan Forest?',
          a: 'Yes, published data mentions 122 restrooms (SPA report 13 June 2026). Availability may change due to maintenance or crowding.'
        },
        {
          q: 'Is there a dedicated prayer area?',
          a: 'The municipality indicates a designated prayer site within the forest facilities.'
        }
      ]
    }
  },
  {
    group: 'visit',
    slug: 'from-airport',
    related: ['taxi-return', 'parking', 'opening-hours', 'al-shafa-highlands', 'one-day-al-baha'],
    ar: {
      h1: 'الوصول إلى غابة رغدان من المطار',
      lead: 'مطار الملك سعود بن عبدالعزيز في العقيق هو مطار الباحة. أكمل بعده غرباً نحو الباحة وصولاً إلى رغدان، مع رصد الضباب والمنعطفات على الطريق الجبلي.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'خطوات عملية',
          paragraphs: [
            'يُعد مطار الملك سعود بن عبدالعزيز في العقيق مطار الباحة. بعد استلام الأمتعة، تحقق من توافر سيارة مستأجرة أو سيارة أجرة أو خدمة حجز نقل نحو الباحة، ثم أكمل غرباً وصولاً إلى رغدان.',
            'الجزء الحاسم هو الطريق الجبلي النهائي. ادخل الإحداثيات 20.0221476، 41.4332427 أو افتح رابط الخريطة.'
          ]
        },
        {
          heading: 'تحذيرات القيادة',
          bullets: [
            'راقب الضباب والمنعطفات، وخفف السرعة عند انخفاض الرؤية أو هطول المطر.',
            'امتلئ خزان الوقود قبل المرتفعات.',
            'لا تفترض وجود خط حافلات يصل مباشرة إلى بوابة الغابة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'ما أقرب مطار إلى غابة رغدان؟',
          a: 'مطار الملك سعود بن عبدالعزيز في العقيق هو مطار الباحة. من هناك تكمل غرباً نحو الباحة وصولاً إلى رغدان.'
        },
        {
          q: 'هل توجد حافلة من المطار إلى الغابة؟',
          a: 'لا نعتمد على وجود خط حافلات ثابت يصل مباشرة إلى بوابة الغابة. خطط مسبقاً لوسيلة الجزء الأخير.'
        },
        {
          q: 'ما المسافة والوقت من المطار؟',
          a: 'لم نتحقق من مسافة أو زمن دقيق؛ تتغير حسب الطريق وحالة المرور والطقس. راجع المسار عند الوصول.'
        }
      ]
    },
    en: {
      h1: 'Getting to Raghadan Forest from the airport',
      lead: 'King Saud bin Abdulaziz Airport in Al Aqeeq is Al Bahah\'s airport. Continue west toward Al Bahah and then to Raghadan, watching for fog and curves on the mountain road.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Practical steps',
          paragraphs: [
            'King Saud bin Abdulaziz Airport in Al Aqeeq is Al Bahah\'s airport. After collecting luggage, check for a rental car, taxi or booked transfer toward Al Bahah, then continue west to Raghadan.',
            'The critical part is the final mountain road. Enter coordinates 20.0221476, 41.4332427 or open the map link.'
          ]
        },
        {
          heading: 'Driving warnings',
          bullets: [
            'Watch for fog and curves, and slow down when visibility drops or it rains.',
            'Fill the fuel tank before the highlands.',
            'Do not assume a fixed bus line reaches the forest gate directly.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What is the closest airport to Raghadan Forest?',
          a: 'King Saud bin Abdulaziz Airport in Al Aqeeq is Al Bahah\'s airport. From there continue west toward Al Bahah and then to Raghadan.'
        },
        {
          q: 'Is there a bus from the airport to the forest?',
          a: 'We do not rely on a fixed bus line reaching the forest gate directly. Plan the final leg in advance.'
        },
        {
          q: 'What is the distance and time from the airport?',
          a: 'We did not verify an exact distance or time; it changes with the route, traffic and weather. Check the route on arrival.'
        }
      ]
    }
  },
  {
    group: 'visit',
    slug: 'taxi-return',
    related: ['from-airport', 'parking', 'crowds', 'evening-coffee', 'opening-hours'],
    ar: {
      h1: 'سيارة الأجرة والعودة من غابة رغدان',
      lead: 'سيارة الأجرة أو خدمات الحجز خيار عملي من المطار أو مدينة الباحة. اتفق على نقطة العودة أو تحقق من إمكانية طلب رحلة عودة، خصوصاً ليلاً أو في ذروة الموسم.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'لماذا التخطيط للعودة مهم؟',
          paragraphs: [
            'الجزء الجبلي النهائي يجعل العودة أصعب من الوصول. الرحلات المتجهة إلى المرتفعات قد تقل ليلاً أو في ذروة الموسم، لذلك يفضّل الاتفاق على العودة مسبقاً.'
          ]
        },
        {
          heading: 'نصائح',
          bullets: [
            'اتفق على نقطة التقاء واضحة وموعد للعودة قبل بدء الزيارة.',
            'احفظ رقم التواصل أو التطبيق المستخدم للحجز.',
            'راقب ساعات الدخول حتى لا تتأخر بعد إغلاق البوابة.'
          ]
        }
      ],
      faqs: [
        {
          q: 'هل يسهل إيجاد سيارة أجرة للعودة من الغابة؟',
          a: 'قد تقل الرحلات المتجهة إلى المرتفعات ليلاً أو في ذروة الموسم. اتفق على رحلة عودة مسبقاً بدلاً من الاعتماد على التوفر الفوري.'
        },
        {
          q: 'هل أحجز ذهاباً وإياباً معاً؟',
          a: 'الحجز المزدوج أو الاتفاق على نقطة عودة يخفف مخاطر بقاء السيارة عند الغابة ليلاً. لا نؤكد توفر خدمة محددة.'
        }
      ]
    },
    en: {
      h1: 'Taxi and return from Raghadan Forest',
      lead: 'A taxi or booked transfer is a practical option from the airport or Al Bahah city. Agree on a return point or check the possibility of booking a return ride, especially late at night or at peak season.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'Why plan the return',
          paragraphs: [
            'The final mountain leg makes the return harder than the arrival. Rides toward the highlands may thin out at night or in peak season, so agreeing on the return in advance is preferable.'
          ]
        },
        {
          heading: 'Tips',
          bullets: [
            'Agree on a clear meeting point and return time before the visit starts.',
            'Save the contact or app used for booking.',
            'Watch entry hours so you do not stay late after the gate closes.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Is it easy to find a taxi for the return from the forest?',
          a: 'Rides toward the Highlands may thin out at night or in peak season. Agree on a return ride in advance rather than relying on immediate availability.'
        },
        {
          q: 'Should I book round trip together?',
          a: 'A combined booking or agreed return point reduces the risk of being stranded at the forest at night. We do not confirm a specific service.'
        }
      ]
    }
  },
  {
    group: 'visit',
    slug: 'crowds',
    related: ['parking', 'opening-hours', 'best-time', 'with-kids', 'summer'],
    ar: {
      h1: 'ازدحام غابة رغدان: متى يكون الهدوء ومتى تزدحم؟',
      lead: 'الصيف وأمسيات عطلات نهاية الأسبوع تشهد ذروة الحركة. الصباح الباكر وبعد العصر أهدأ عادة، لكن الضباب والطقس قد يغيران الإقبال.',
      updated: UPDATED_AR,
      sections: [
        {
          heading: 'متى تزدحم؟',
          paragraphs: [
            'يزداد إقبال الزوار في الصيف بسبب اعتدال أجواء الباحة مقارنة بمناطق أكثر حرارة، وتتباطأ الحركة عند المداخل والمطلات في أمسيات عطلات نهاية الأسبوع.'
          ]
        },
        {
          heading: 'كيف تتجنب الزحام؟',
          bullets: [
            'زر مبكراً أو بعد العصر.',
            'تأكد من ساعات الدخول واترك وقتاً إضافياً للوصول والركن.',
            'لا تعتمد على إقبال منخفض مضمون؛ الطقس والعطلات تؤثر.'
          ]
        }
      ],
      faqs: [
        {
          q: 'متى يكون الهدوء في غابة رغدان؟',
          a: 'الصباح الباكر وبعد العصر أهدأ عادة. الصيف وأمسيات العطلات تشهد ذروة الحركة.'
        },
        {
          q: 'هل الضباب يقلل الزحام؟',
          a: 'قد يقل الإقبال عند تدني الرؤية، لكن الضباب ظاهرة غير مضمونة؛ لا تبنِ خطة على هدوء مؤكد.'
        }
      ]
    },
    en: {
      h1: 'Raghadan Forest crowds: when is it calm, when is it busy?',
      lead: 'Summer and weekend-holiday evenings see peak movement. Early morning and after noon are usually calmer, but fog and weather can shift attendance.',
      updated: UPDATED_EN,
      sections: [
        {
          heading: 'When it gets busy',
          paragraphs: [
            'Visitor movement increases in summer because Al Bahah weather is milder than hotter regions, and movement slows at gates and overlooks on weekend-holiday evenings.'
          ]
        },
        {
          heading: 'How to avoid crowding',
          bullets: [
            'Visit early or after noon.',
            'Confirm entry hours and allow extra arrival and parking time.',
            'Do not rely on guaranteed low attendance; weather and holidays affect it.'
          ]
        }
      ],
      faqs: [
        {
          q: 'When is Raghadan Forest calm?',
          a: 'Early morning and after noon are usually calmer. Summer and holiday evenings see peak movement.'
        },
        {
          q: 'Does fog reduce crowding?',
          a: 'Attendance may drop when visibility is low, but fog is not a guaranteed phenomenon; do not build a plan on certain calm.'
        }
      ]
    }
  }
];
