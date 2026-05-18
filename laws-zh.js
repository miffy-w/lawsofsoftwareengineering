// 软件工程法则 — 中文数据
// 数据来源: https://lawsofsoftwareengineering.com/api.json
// 翻译进度: 56/56 条已翻译
// 内容基于 CC BY-NC-ND 4.0 许可

const GROUP_MAP = {"Teams":"团队","Planning":"规划","Architecture":"架构","Quality":"质量","Scale":"规模","Design":"设计","Decisions":"决策"};
const LEVEL_MAP = {"junior":"初级","mid":"中级","senior":"高级"};

const LAWS = [
  {
    "title": "康威定律",
    "titleEn": "Conway's Law",
    "slug": "conways-law",
    "description": "组织所设计的系统会反映其自身的沟通结构。",
    "descriptionEn": "Organizations design systems that mirror their own communication structure.",
    "experience": "senior",
    "group": "Teams",
    "image": "/images/laws/conways-law.png",
    "overview": "康威定律指出，软件系统会反映构建它的组织的沟通结构。一家将前端、后端和数据库部门分开的公司，极有可能产出一个三层架构的系统。小型分布式团队倾向于产生模块化的服务架构，而大型集中式团队则倾向于构建单体系统。为了缓解这一问题，团队可以采用「逆康威策略」：有意识地按照期望的软件架构来调整组织结构。",
    "examples": "某家公司拥有独立的前端、后端和数据库部门。他们构建的软件呈现三层架构，每一层由各自部门独立设计。由于团队之间目标不一致，层级之间的集成非常痛苦。亚马逊以组织「双披萨团队」而闻名，每个团队负责一个特定的服务。康威定律表明，这正是亚马逊采用面向服务架构的原因，各服务之间有清晰的 API 契约。",
    "origins": "梅尔文·康威（Melvin Conway）在 1967 年的论文《委员会如何发明？》中提出了这一想法。《哈佛商业评论》因缺乏形式化证明而拒绝发表，随后《Datamation》于 1968 年发表了该论文。弗雷德·布鲁克斯（Fred Brooks）后来在《人月神话》中将其命名为「康威定律」，使其成为软件工程领域的基础概念。",
    "takeaways": [
      "软件系统的架构通常反映公司的组织架构或团队结构。",
      "如果公司以孤岛方式组织，就可能产出沟通不畅的孤岛式软件模块。",
      "要实现期望的软件架构（如微服务），可能需要先重组团队，因为团队会按照其沟通路径来构建软件。",
      "在项目启动时，要意识到团队的划分方式很可能会导致软件边界出现在同样的位置。"
    ],
    "related": [
      "brooks-law",
      "galls-law",
      "law-of-leaky-abstractions",
      "hyrums-law"
    ],
    "further_reading": [
      {
        "title": "How Do Committees Invent?",
        "url": "https://www.melconway.com/Home/Committees_Paper.html",
        "description": "梅尔文·康威 1968 年的原始论文"
      },
      {
        "title": "Conway's Law",
        "url": "https://martinfowler.com/bliki/ConwaysLaw.html",
        "description": "马丁·福勒（Martin Fowler）对康威定律的解读"
      },
      {
        "title": "Spotify Engineering Culture",
        "url": "https://engineering.atspotify.com/2014/3/spotify-engineering-culture-part-1",
        "description": "Spotify 工程文化原始博客文章"
      },
      {
        "title": "Team Topologies",
        "url": "https://amzn.to/4jgRZ6V",
        "description": "康威定律在现代组织设计中的应用"
      }
    ]
  },
  {
    "title": "过早优化（克努斯优化原则）",
    "titleEn": "Premature Optimization (Knuth's Optimization Principle)",
    "slug": "premature-optimization",
    "description": "过早优化是万恶之源。",
    "descriptionEn": "Premature optimization is the root of all evil.",
    "experience": "junior",
    "group": "Planning",
    "image": "/images/laws/premature-optimization.png",
    "overview": "克努斯优化原则揭示了一个根本性的权衡：性能改进往往会增加复杂性。在尚未理解性能瓶颈真正所在之前就进行这种权衡，会导致代码难以阅读和维护。在开发早期，应专注于清晰的设计。如果过早优化，可能会引入 bug 或降低代码灵活性，而这一切只是为了加速那些可能根本不是瓶颈的代码部分。通常认为 20% 的代码消耗 80% 的执行时间。该原则建议先编写简洁的代码，然后通过性能分析找出真正需要优化的部分。",
    "examples": "一位开发者用 C 语言编写了一个底层例程，花费两天时间用复杂的位操作来提升速度，结果发现这个函数只在启动时调用一次，仅占运行时间的 0.001%。精力白白浪费，代码还变得更难理解。相反，遵循克努特的建议：先用简洁的方式实现，然后测量，发现 80% 的时间都花在某个循环上，再针对那个循环进行优化或使用更好的算法。",
    "origins": "唐纳德·克努斯（Donald Knuth）在 1974 年发表于《ACM Computing Surveys》的论文《带 goto 语句的结构化编程》中提出了这一观点。完整的引用提供了重要的上下文：「在约 97% 的情况下，我们应该忽略微小的效率问题：过早优化是万恶之源。但我们不应错过那关键的 3% 的机会。」这句话逐渐成为软件工程中近乎谚语般的存在。",
    "takeaways": [
      "大多数代码并不在性能关键的热点路径上，执着于处处进行微优化会浪费时间，并使代码更难阅读和维护。",
      "根据克努斯的说法，在约 97% 的情况下，我们应该忽略微小的效率问题，专注于清晰的设计和正确的功能。",
      "优化后的代码通常更复杂或更难以理解。如果在不必要的时候过早进行优化，就会白费这些代价。",
      "先让它正确工作，再让它快起来，最后让它漂亮起来。"
    ],
    "related": [
      "yagni",
      "hofstadters-law",
      "galls-law",
      "kernighans-law",
      "amdahls-law"
    ],
    "further_reading": [
      {
        "title": "Structured Programming with go to Statements",
        "url": "https://pic.plover.com/knuth-GOTO.pdf",
        "description": "唐纳德·克努斯 1974 年的原始论文"
      },
      {
        "title": "Code Complete",
        "url": "https://amzn.to/4b6YVBx",
        "description": "史蒂夫·麦康奈尔（Steve McConnell）的软件构建综合指南"
      },
      {
        "title": "Program Optimization - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Program_optimization",
        "description": "优化技术及其应用时机概览"
      }
    ]
  },
  {
    "title": "海勒姆定律",
    "titleEn": "Hyrum's Law",
    "slug": "hyrums-law",
    "description": "当 API 的用户数量足够多时，系统中所有可观察到的行为最终都会被某些人所依赖。",
    "descriptionEn": "With a sufficient number of API users, all observable behaviors of your system will be depended on by somebody.",
    "experience": "senior",
    "group": "Architecture",
    "image": "/images/laws/hyrums-law.png",
    "overview": "海勒姆定律由 Google 工程师海勒姆·赖特（Hyrum Wright）提出并广为流传。核心观点是：即使你的 API 文档明确规定了契约，当用户数量足够多时，系统所有可观察到的行为——包括 bug、实现细节、未记录的副作用——最终都会被某些人所依赖。这意味着任何对系统行为的更改，无论多么微小或看似无害，都可能破坏某些用户的功能。该定律深刻影响了 API 设计与向后兼容性策略：不能仅依赖文档化契约来保护用户，还要考虑实际可观察到的行为。",
    "examples": "一个库的排序函数在文档中未承诺特定的排序顺序，但实现恰好使用了稳定排序。成千上万的开发者不知不觉地依赖了这一行为。当新版本切换为更快的非稳定排序算法时，大量应用出现故障。另一个例子：某个 REST API 返回的 JSON 字段顺序虽未在文档中承诺，但客户端代码通过字段位置而非字段名来解析，导致 API 调整字段顺序后客户端崩溃。",
    "origins": "海勒姆·赖特（Hyrum Wright）在 Google 工作期间观察到这一现象，并在软件工程界广泛流传。它有时被称为「接口的隐含契约定律」。",
    "takeaways": [
      "当用户足够多时，任何可观察到的行为——甚至 bug——都会被某些人依赖。",
      "变更 API 时，不能只考虑文档化的契约，还需要考虑实际的可观察行为。",
      "充分的测试覆盖和对用户行为模式的深入理解有助于降低 API 变更的风险。",
      "API 设计应从项目一开始就谨慎对待，因为后期修改的成本可能非常高。"
    ],
    "related": [
      "law-of-leaky-abstractions"
    ],
    "further_reading": [
      {
        "title": "Hyrum's Law Official Site",
        "url": "https://www.hyrumslaw.com/",
        "description": "海勒姆定律的官方阐述"
      },
      {
        "title": "Software Engineering at Google",
        "url": "https://abseil.io/resources/swe-book/html/ch01.html#hyrumapostrophes_law",
        "description": "在大型系统语境下讨论海勒姆定律"
      },
      {
        "title": "Hyrum's Law on xkcd",
        "url": "https://xkcd.com/1172/",
        "description": "以漫画形式说明该问题的 xkcd 作品"
      }
    ]
  },
  {
    "title": "童子军规则",
    "titleEn": "The Boy Scout Rule",
    "slug": "boy-scout-rule",
    "description": "让代码比你接手时更好。",
    "descriptionEn": "Leave the code better than you found it.",
    "experience": "junior",
    "group": "Quality",
    "image": "/images/laws/boy-scout-rule.png",
    "overview": "童子军规则源自童子军的格言：「让营地比你发现它时更干净。」在软件工程中，这被罗伯特·C·马丁（Robert C. Martin，昵称鲍勃大叔）在《代码整洁之道》中推广开来。核心理念是：每次接触代码时，都应该留下一个小小的改进——重命名一个变量、拆分一个过长的函数、删除一段死代码、修复一处不准确的注释。这些微小的改进积累起来，就能防止代码库的熵增和腐化。关键不是大刀阔斧地重写，而是持续不断地进行小步改进。",
    "examples": "一位开发者在修复一个 bug 时，注意到函数名 processData 过于模糊。她花不到一分钟将其重命名为更具体的名称。下一位开发者修改同一文件时，发现一个测试缺失，顺手补充。再下一位将重复代码提取为工具函数。一年后，该文件从一团难以维护的代码变成了文档齐全、结构清晰的代码——而这些改变都是在日常工作中零散完成的，从未有过专门的「重构项目」。",
    "origins": "罗伯特·C·马丁（Robert C. Martin）在《代码整洁之道》（Clean Code, 2008）中将童子军规则引入软件工程领域，使其成为专业软件开发的核心实践准则之一。",
    "takeaways": [
      "每次修改代码时，都应该让代码库比之前更整洁、更可维护。",
      "改进不必很大——重命名变量、拆分函数、删除死代码，每一项都有价值。",
      "持续的微小改进能有效防止代码腐化，远胜于偶尔的大规模重构。",
      "这是职业素养的体现：专业人员不会故意留下比发现时更糟的代码。"
    ],
    "related": [
      "broken-windows-theory",
      "yagni",
      "technical-debt"
    ],
    "further_reading": [
      {
        "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
        "url": "https://amzn.to/3LjRFYI",
        "description": "罗伯特·C·马丁的经典编程著作"
      },
      {
        "title": "The Boy Scout Rule",
        "url": "https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html",
        "description": "童子军规则的形式化表述"
      },
      {
        "title": "Refactoring: Improving the Design of Existing Code",
        "url": "https://martinfowler.com/books/refactoring.html",
        "description": "马丁·福勒关于代码重构的权威指南"
      },
      {
        "title": "Code Complete",
        "url": "https://amzn.to/3N57T8t",
        "description": "Steve McConnell 的软件构建综合指南"
      }
    ]
  },
  {
    "title": "YAGNI（你不会需要它）",
    "titleEn": "YAGNI (You Aren't Gonna Need It)",
    "slug": "yagni",
    "description": "不要在确实需要之前添加功能。",
    "descriptionEn": "Don't add functionality until it is necessary.",
    "experience": "junior",
    "group": "Design",
    "image": "/images/laws/yagni.png",
    "overview": "YAGNI 是极限编程（XP）的核心原则之一，强调不要为未来可能的需求预先构建功能。软件开发中常见的一种浪费是：开发者花大量时间构建他们认为「以后会用到」的灵活性和功能，但绝大多数这些功能永远不会被使用。YAGNI 要求我们只在有明确、即时的需求时才实现功能，而不是基于推测。这样做可以保持代码库简洁、减少维护负担，并让团队专注于真正重要的功能。",
    "examples": "团队在开发一个用户管理系统时，考虑到「以后可能需要支持 OAuth」，花了两周实现了一个完整的社交登录模块（支持 Google、Facebook、GitHub 等）。但产品上线六个月后，用户量还不大，社交登录的需求从未被提出过。如果团队遵循 YAGNI 原则，他们应该先实现简单的邮箱/密码注册，等到确实有用户要求社交登录时再添加。",
    "origins": "YAGNI 是极限编程（Extreme Programming, XP）方法论中的一条核心原则，由 Kent Beck 和 Ron Jeffries 等 XP 先驱在 1990 年代末推广开来。它是「简单设计」实践的一部分，与 KISS（保持简单）和 DRY（不要重复自己）等原则相辅相成。",
    "takeaways": [
      "不要在当下实现你「认为」未来可能需要的东西，因为大多数预测都是错的。",
      "每次添加不必要的代码都意味着需要维护它，增加了代码库的长期成本。",
      "当实际需要某项功能时再实现，此时你对该功能的了解远比现在多。",
      "YAGNI 并不意味着要编写不灵活的代码——但灵活性应该来自良好的设计，而非过度构建。"
    ],
    "related": [
      "kiss-principle",
      "dry-principle",
      "premature-optimization"
    ],
    "further_reading": [
      {
        "title": "YAGNI on Martin Fowler's website",
        "url": "https://martinfowler.com/bliki/Yagni.html",
        "description": "马丁·福勒关于 YAGNI 原则的阐述"
      },
      {
        "title": "Extreme Programming Installed",
        "url": "https://amzn.to/4siycbq",
        "description": "Kent Beck 的经典极限编程著作"
      },
      {
        "title": "You Aren't Gonna Need It on C2 Wiki",
        "url": "http://wiki.c2.com/?YouArentGonnaNeedIt",
        "description": "关于如何将 XP 实践应用于现代开发的指南"
      }
    ]
  },
  {
    "title": "布鲁克斯定律",
    "titleEn": "Brooks's Law",
    "slug": "brooks-law",
    "description": "向一个已经延期的软件项目增加人手，只会让它延期得更久。",
    "descriptionEn": "Adding manpower to a late software project makes it later.",
    "experience": "mid",
    "group": "Teams",
    "image": "/images/laws/brooks-law.png",
    "overview": "弗雷德·布鲁克斯在《人月神话》中提出了这一著名定律。其核心逻辑有三层：首先，新加入的人需要时间来熟悉项目，而这个学习过程会消耗现有团队成员的时间来指导和沟通。其次，团队沟通开销随人数呈几何级增长——n 个人的沟通渠道数量是 n(n-1)/2。第三，某些任务（如软件开发中的核心设计决策）是不可分割的，不会因为更多人参与而加速。布鲁克斯用「9 个女人无法在 1 个月内生出孩子」来比喻这种不可分割性。但该定律并非绝对：如果任务可以完全独立并行，且新成员的培训成本很低，增加人手仍然有效。",
    "examples": "一个已经延期的六个月项目，项目经理说服高层增加四名开发者。但现有的五名开发者不得不每天花数小时为新人答疑解惑，导致自己的产出大幅下降。两个月后，项目不仅没有加速，反而比原来更加混乱和延迟。而另一个项目——为十个不同客户做数据迁移——每个客户独立，新成员只需学习流程即可独立工作，因此增加人手确实加快了进度。",
    "origins": "弗雷德·布鲁克斯（Fred Brooks）在 1975 年出版的经典著作《人月神话》（The Mythical Man-Month）中提出了这一定律。布鲁克斯曾在 IBM 管理 System/360 操作系统项目，这是当时最大的软件项目之一，他从中积累了深刻的管理经验。",
    "takeaways": [
      "向延期的项目增加人手会增加沟通和培训成本，往往弊大于利。",
      "团队沟通开销呈几何级增长，人数越多，花在同步上的时间越多。",
      "某些核心任务是不可分割的，不能通过并行化来加速。",
      "应该优先考虑让现有团队更高效地工作，而非盲目扩大团队规模。"
    ],
    "related": [
      "conways-law",
      "second-system-effect",
      "law-of-unintended-consequences"
    ],
    "further_reading": [
      {
        "title": "The Mythical Man-Month",
        "url": "https://amzn.to/4peJbjC",
        "description": "弗雷德·布鲁克斯的经典软件工程著作"
      },
      {
        "title": "Brooks's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Brooks%27s_law",
        "description": "关于布鲁克斯定律的详细解析"
      },
      {
        "title": "No Silver Bullet",
        "url": "https://en.wikipedia.org/wiki/No_Silver_Bullet",
        "description": "微软关于高效团队规模的研究"
      }
    ]
  },
  {
    "title": "加尔定律",
    "titleEn": "Gall's Law",
    "slug": "galls-law",
    "description": "一个能正常运作的复杂系统，总是从一个能正常运作的简单系统演化而来。",
    "descriptionEn": "A complex system that works is invariably found to have evolved from a simple system that worked.",
    "experience": "senior",
    "group": "Architecture",
    "image": "/images/laws/galls-law.png",
    "overview": "约翰·加尔观察到，成功的复杂系统总是从简单的起点开始，逐步演化而来。试图从零开始设计一个复杂的系统几乎注定失败——因为存在太多未经验证的假设和未知的交互。正确的方法是：从一个简单的架构开始，通过实际使用学习，以小的增量添加功能和复杂性，每次变动后都验证系统仍能正常工作。这直接支持了 MVP（最小可行产品）方法论，反对「大爆炸」式一次性发布。",
    "examples": "Facebook 起初只是一个限制在哈佛大学的基本社交网站——本质上是一个在小范围内运行的个人资料系统。它逐步增长，层层叠加功能和扩展用户规模。如果扎克伯格在 2004 年就试图构建现代 Facebook 规模的复杂系统，「几乎肯定会在自身复杂度下崩溃」。类似地，微服务架构的最佳实践建议：不要从微服务开始，而是先构建一个可工作的单体架构，在其成长过程中逐步提取组件为独立服务。",
    "origins": "约翰·加尔（John Gall）是一位美国儿科医生，同时也从事系统理论研究。他在 1975 年出版了《系统学：系统如何运作及其为何失败》（Systemantics）一书，该书被 30 家出版商拒绝后成为了小众经典。第三版（2002 年）更名为《系统圣经》（The Systems Bible）。",
    "takeaways": [
      "不要试图一开始就构建复杂的系统——从一个简单可行的版本开始，然后迭代。",
      "成功的系统通过有机增长和逐步演化而来，而非一次性大爆炸式设计。",
      "加尔定律直接支持增量开发和 MVP 方法论：先发布一个最小的可行核心。",
      "逐步演化的系统更具适应性，因为每个阶段都经过了测试和打磨。"
    ],
    "related": [
      "conways-law",
      "brooks-law",
      "law-of-leaky-abstractions",
      "hofstadters-law"
    ],
    "further_reading": [
      {
        "title": "The Systems Bible",
        "url": "https://amzn.to/4svZT0K",
        "description": "约翰·加尔关于系统理论的经典著作"
      },
      {
        "title": "The Mythical Man-Month",
        "url": "https://amzn.to/4b4GU72",
        "description": "弗雷德·布鲁克斯关于软件工程的经典"
      },
      {
        "title": "Monolith First",
        "url": "https://martinfowler.com/bliki/MonolithFirst.html",
        "description": "马丁·福勒倡导先构建单体再拆分为微服务的文章"
      },
      {
        "title": "Thinking in Systems",
        "url": "https://amzn.to/4qgVSvH",
        "description": "多内拉·梅多斯关于系统思维的入门书"
      }
    ]
  },
  {
    "title": "抽象漏洞法则",
    "titleEn": "The Law of Leaky Abstractions",
    "slug": "law-of-leaky-abstractions",
    "description": "所有非平凡的抽象，在某种程度上都是存在漏洞的。",
    "descriptionEn": "All non-trivial abstractions, to some degree, are leaky.",
    "experience": "mid",
    "group": "Architecture",
    "image": "/images/laws/leaky-abstractions.png",
    "overview": "乔尔·斯波尔斯基（Joel Spolsky）在 2002 年提出了这一法则。其核心观点是：抽象层的目的是隐藏底层复杂性，但它们永远无法完美地做到这一点。当底层实现细节透过抽象层「泄漏」出来时，开发者就不得不理解底层的工作原理才能解决问题。典型的例子包括：ORM（对象关系映射）生成的 SQL 可能效率极低，需要开发者理解数据库查询优化；TCP 在不可靠的网络上提供「可靠」的连接，但网络故障仍会影响应用层；高级语言的内存管理被自动回收抽象了，但性能和内存泄漏问题仍需要理解底层机制。抽象仍然有用——它大幅减少了我们需要处理的细节——但关键是要意识到没有一个抽象是完美的。",
    "examples": "一个团队使用 ORM 来避免编写 SQL。大部分时候工作正常，但生产环境中某个查询突然变得极慢。为了排查，开发者不得不理解 ORM 生成的 SQL 语句、数据库执行计划和索引策略——这些都是 ORM 本应「抽象掉」的东西。另一个例子：某团队在 AWS Lambda 上运行 Node.js，认为「无需关心服务器」。但当遇到冷启动延迟时，他们不得不学习容器运行时、VPC 网络和连接池的工作原理。",
    "origins": "乔尔·斯波尔斯基（Joel Spolsky）在他 2002 年的博客文章《抽象漏洞法则》中命名并系统阐述了这一现象。斯波尔斯基是 Stack Overflow 和 Trello 的联合创始人，也是知名的软件工程博主。",
    "takeaways": [
      "所有抽象层都有漏洞——底层实现细节迟早会影响到上层。",
      "了解你使用的工具在底层是如何工作的，即使你通常依赖抽象。",
      "选择抽象时，考虑它的‘泄漏’频率和严重程度——这决定了你需要多少底层知识。",
      "不要因为抽象有漏洞就拒绝使用它——它们仍然大幅减少了复杂性。"
    ],
    "related": [
      "hyrums-law",
      "galls-law"
    ],
    "further_reading": [
      {
        "title": "The Law of Leaky Abstractions",
        "url": "https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/",
        "description": "乔尔·斯波尔斯基提出抽象漏洞法则的原始博客文章"
      },
      {
        "title": "A Note on Distributed Computing",
        "url": "https://scholar.harvard.edu/waldo/publications/note-distributed-computing",
        "description": "关于抽象和接口设计的系统性著作"
      },
      {
        "title": "Towards a New Model of Abstraction in Software Engineering",
        "url": "https://web.archive.org/web/20110604013045/http://www2.parc.com/csl/groups/sda/publications/papers/Kiczales-IMSA92/for-web.pdf",
        "description": "Google Python 风格指南中关于抽象的内容"
      }
    ]
  },
  {
    "title": "泰斯勒定律（复杂度守恒）",
    "titleEn": "Tesler's Law (Conservation of Complexity)",
    "slug": "teslers-law",
    "description": "每个应用都具有一定量的不可简化的内在复杂性，它只能被转移，无法被消除。",
    "descriptionEn": "Every application has an inherent amount of irreducible complexity that can only be shifted, not eliminated.",
    "experience": "senior",
    "group": "Architecture",
    "image": "/images/laws/tesler-law.png",
    "overview": "拉里·泰斯勒（Larry Tesler）认为，任何系统都有一份固有的、最小的复杂性，无法被消除——只能被移动。这意味着：如果开发者简化了用户界面，内部的代码复杂度往往就会增加；如果系统简化了某项功能，相关的复杂度就转移到了用户身上。设计决策实际上就是在决定谁来承担这份复杂性——是用户、是开发者，还是系统架构。好的设计让专门的人（如开发者）承担复杂度，让普通用户享受简洁的界面。",
    "examples": "一个文件上传组件的用户体验极其简单——拖放文件即可。但内部的实现包含了分块上传、并发控制、断点续传、病毒扫描和转码队列。复杂度并没有消失，只是转移到了后端。当一个照片分享应用提供一键「增强」按钮时，它把复杂的图像处理算法（色彩校正、降噪、锐化）隐藏在后台，用户无需学习任何相关技能。",
    "origins": "拉里·泰斯勒（Larry Tesler，1945-2020）是一位计算机科学家，曾在 Xerox PARC 工作，参与开发了 Smalltalk 和最早的图形用户界面。他还在 Apple 担任过首席科学家。他在用户界面设计工作中提出了这一法则，最初用于强调用户界面的简洁性不应以牺牲功能性为代价。",
    "takeaways": [
      "每个系统都有内在的核心复杂度，不能被消除——只能通过抽象或自动化转移。",
      "设计决策实际上是在选择谁来承担这份复杂度：用户、开发者还是系统。",
      "好的工程师应该主动承担管理的复杂度，让用户享受简单的体验。",
      "简化用户界面几乎总是意味着增加后端或内部代码复杂度。"
    ],
    "related": [
      "hyrums-law",
      "occams-razor"
    ],
    "further_reading": [
      {
        "title": "Why Life Can't Be Simpler",
        "url": "https://fs.blog/why-life-cant-be-simpler/",
        "description": "拉里·泰斯勒关于复杂度守恒的阐述"
      },
      {
        "title": "Law of Conservation of Complexity",
        "url": "https://humanist.co/blog/law-of-conservation-of-complexity/",
        "description": "尼尔森·诺曼集团关于 UX 复杂度的文章"
      },
      {
        "title": "Simplicity is Overrated",
        "url": "https://marvelapp.com/blog/simplicity-is-overrated/",
        "description": "唐·诺曼关于设计和用户体验的经典著作"
      },
      {
        "title": "Law of Conservation of Complexity (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity",
        "description": "维基百科关于泰斯勒定律的文章"
      }
    ]
  },
  {
    "title": "CAP 定理",
    "titleEn": "CAP Theorem",
    "slug": "cap-theorem",
    "description": "一个分布式系统只能同时保证一致性、可用性和分区容错性中的两者。",
    "descriptionEn": "A distributed system can guarantee only two of: consistency, availability, and partition tolerance.",
    "experience": "senior",
    "group": "Architecture",
    "image": "/images/laws/CAP-theorem.png",
    "overview": "CAP 定理（也称布鲁尔定理）由 Eric Brewer 在 2000 年提出，后被形式化证明。它指出：在网络分区（P）发生时，分布式系统必须在一致性（C）和可用性（A）之间二选一。一致性意味着所有节点在同一时刻看到相同的数据；可用性意味着每个请求都能得到非错误的响应；分区容错性意味着系统在网络分区存在时仍能继续运作。选择 CP 的系统（如 HBase）会在网络分区时拒绝某些写入以保持一致性；选择 AP 的系统（如 Cassandra）会接受写入但可能返回不一致的数据。实际上，这不是非黑即白的选择——系统可以在一个连续谱上做出不同程度的权衡。",
    "examples": "一个银行系统必须选择 CP：当两个数据中心之间的网络中断时，系统可能会拒绝某些交易请求，而非冒险让两个数据中心出现不一致的账户余额。而一个社交媒体动态流可以选择 AP：当你发布一条状态更新时，即使某些服务器暂时无法同步，你的朋友最终仍能看到它——短暂的轻微不一致是可接受的。",
    "origins": "Eric Brewer 在 2000 年的 PODC（分布式计算原理）会议上以猜想的形式提出了这一观点。2002 年，Seth Gilbert 和 Nancy Lynch 在 MIT 正式证明了该定理的正确性。",
    "takeaways": [
      "分布式系统必须根据自身需求在一致性和可用性之间取舍——没有完美的解决方案。",
      "分区容错性通常是必须的——网络故障是不可避免的——因此真正的选择在 C 和 A 之间。",
      "大多数真实系统采取折中方案：在正常情况下同时提供 C 和 A，在网络分区时降级一侧。",
      "选择数据库或架构时，理解它在 CAP 空间中的定位至关重要。"
    ],
    "related": [
      "fallacies-of-distributed-computing"
    ],
    "further_reading": [
      {
        "title": "Brewer's CAP Theorem",
        "url": "https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/",
        "description": "Eric Brewer 关于 CAP 定理的回顾"
      },
      {
        "title": "CAP Twelve Years Later: How the 'Rules' Have Changed",
        "url": "https://sites.cs.ucsb.edu/~rich/class/cs293b-cloud/papers/brewer-cap.pdf",
        "description": "Brewer 2012 年 IEEE 论文：CAP 定理再审视"
      },
      {
        "title": "Gilbert & Lynch 2002 Paper",
        "url": "https://groups.csail.mit.edu/tds/papers/Gilbert/Brewer2.pdf",
        "description": "CAP 定理的形式化证明论文"
      },
      {
        "title": "Designing Data-Intensive Applications",
        "url": "https://amzn.to/4pVAwU5",
        "description": "Martin Kleppmann 关于分布式系统的权威著作"
      },
      {
        "title": "A Critique of the CAP Theorem",
        "url": "https://www.cl.cam.ac.uk/research/dtg/archived/files/publications/public/mk428/cap-critique.pdf",
        "description": "Martin Kleppmann 对 CAP 定理定义模糊性的批评"
      }
    ]
  },
  {
    "title": "第二系统效应",
    "titleEn": "Second-System Effect",
    "slug": "second-system-effect",
    "description": "小型成功的系统往往会被过度设计、臃肿的替代品所取代。",
    "descriptionEn": "Small, successful systems tend to be followed by overengineered, bloated replacements.",
    "experience": "senior",
    "group": "Architecture",
    "image": "/images/laws/second-system-effect.jpeg",
    "overview": "弗雷德·布鲁克斯在《人月神话》中描述了一种反复出现的模式：设计师在完成第一个简洁成功的系统后，在构建第二个系统时，倾向于塞入第一个系统中被省去的所有功能和想法，导致第二个系统过度复杂、臃肿且难以维护。第一个系统的成功正是因为其克制和专注，但设计师在第二次尝试时失去了这种纪律，试图把一切东西都加进去。结果是：第二个系统往往远不如第一个成功，甚至可能彻底失败。避免这一陷阱的方法是保持自我约束，像设计第一个系统那样对功能请求保持克制。",
    "examples": "某初创公司用一套简洁的 REST API 取得了初步成功——设计简单、易于理解。团队被授权构建 v2 时，加入了版本控制、自定义内容协商、扩展的元数据、实时 webhook、GraphQL 支持等大量功能。结果 v2 变得如此复杂，以至客户宁愿继续使用功能较少但稳定的 v1。另一个经典案例：OS/360 本应是精简的后续操作系统，却变得极其庞大，而最初简洁的 OS/360 设计正是其成功的原因。",
    "origins": "弗雷德·布鲁克斯（Fred Brooks）在《人月神话》（1975 年）中创造了「第二系统效应」这一术语，作为他对 IBM System/360 项目经验的反思之一。",
    "takeaways": [
      "第一个系统成功的原因往往是其简洁和克制——不要在第二个版本中丢掉这个优势。",
      "设计师在第二个系统中倾向于过度补偿第一个系统中被拒绝的功能，导致臃肿。",
      "警惕在获得成功后出现的‘把一切加入’的冲动——保持系统简单仍然重要。",
      "避免第二系统效应的最好方法是持续的自我约束和审视。"
    ],
    "related": [
      "yagni",
      "galls-law",
      "brooks-law"
    ],
    "further_reading": [
      {
        "title": "The Mythical Man-Month",
        "url": "https://amzn.to/4b4GU72",
        "description": "弗雷德·布鲁克斯的经典软件工程著作"
      },
      {
        "title": "Second-system effect - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Second-system_effect",
        "description": "关于第二系统效应的详细解释"
      },
      {
        "title": "Things You Should Never Do, Part I",
        "url": "https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/",
        "description": "雅各布·尼尔森关于框架和设计的权衡"
      }
    ]
  },
  {
    "title": "分布式计算谬误",
    "titleEn": "Fallacies of Distributed Computing",
    "slug": "fallacies-of-distributed-computing",
    "description": "一组八条新手分布式系统设计者常犯的错误假设。",
    "descriptionEn": "A set of eight false assumptions that new distributed system designers often make.",
    "experience": "senior",
    "group": "Architecture",
    "image": "/images/laws/fallacies-of-distributed-computing.png",
    "overview": "分布式计算谬误最初由 L. Peter Deutsch 和 Sun Microsystems 的同事整理，列出了分布式系统设计者常犯的八条错误假设：1）网络是可靠的；2）延迟为零；3）带宽是无限的；4）网络是安全的；5）网络拓扑不会改变；6）只有一个管理员；7）传输成本为零；8）网络是同构的。每个假设在实践中都是错误的，忽略它们会导致系统在真实环境中发生故障。任何分布式系统的设计都必须考虑到网络不可靠、存在延迟、带宽有限等现实约束。",
    "examples": "一个微服务架构假设网络调用总能成功，没有重试逻辑。当网络出现瞬间抖动时，大量的连锁故障导致整个系统瘫痪。另一团队的系统假设网络延迟是可忽略的，做了数百次串行的远程调用——在测试环境运行良好，但在生产中（跨区域），每次调用有 50ms 延迟，总响应时间超过 15 秒。",
    "origins": "L. Peter Deutsch 在 Sun Microsystems 工作时整理了最初的七条谬误，James Gosling 后来添加了第八条。这份列表成为了分布式系统设计的基础理论。",
    "takeaways": [
      "永远不要假设网络是可靠的——设计时就要考虑故障处理。",
      "网络延迟在分布式系统中是真实存在的——尽量减少远程调用的数量。",
      "带宽不是无限的——数据的序列化和传输需要精心设计。",
      "安全不能被事后修补——分布式系统的安全必须从设计之初就考虑。"
    ],
    "related": [
      "cap-theorem",
      "murphys-law"
    ],
    "further_reading": [
      {
        "title": "Fallacies of Distributed Computing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing",
        "description": "关于分布式计算谬误的综合论述"
      },
      {
        "title": "Fallacies of Distributed Computing Explained",
        "url": "https://www.rgoarchitects.com/Files/fallacies.pdf",
        "description": "Arnon Rotem-Gal-Oz 对各条谬误的详细解析"
      },
      {
        "title": "The Eight Fallacies of Distributed Computing",
        "url": "https://nighthacks.com/jag/res/Fallacies.html",
        "description": "James Gosling 关于分布式计算谬误的文章"
      },
      {
        "title": "Designing Data-Intensive Applications",
        "url": "https://amzn.to/4pVAwU5",
        "description": "Martin Kleppmann 深入探讨分布式系统谬误的著作"
      },
      {
        "title": "Foraging for the Fallacies of Distributed Computing",
        "url": "https://medium.com/baseds/foraging-for-the-fallacies-of-distributed-computing-part-1-1b35c3b85b53",
        "description": "Vaidehi Joshi 对各条谬误的通俗解析"
      }
    ]
  },
  {
    "title": "意外后果法则",
    "titleEn": "Law of Unintended Consequences",
    "slug": "law-of-unintended-consequences",
    "description": "每当你改变一个复杂系统时，都要对意料之外的结果有所准备。",
    "descriptionEn": "Whenever you change a complex system, expect surprise.",
    "experience": "senior",
    "group": "Architecture",
    "image": "/images/laws/law-of-unintended-consequences.png",
    "overview": "任何对复杂系统的改变——无论是代码修改、配置调整还是流程变更——都可能产生无法预见的副作用。复杂系统中的各个部分以交织的方式相互关联，一个看似简单的改动可以在远离之处产生连锁效应。这一法则在金融系统、分布式系统和大型组织中尤为明显。避免意外后果的方法包括：小批量变更、全面测试、渐进式发布和监控。但重要的是，即使采取了所有这些措施，完全消除意外后果是不可能的——复杂系统的固有属性就是不可预测性。",
    "examples": "一个看似无害的数据库索引调整，意外地改变了查询优化器的执行计划选择，导致原本正常运行的报表查询突然慢了 100 倍。一个团队在微服务中添加了请求超时限制，却未告知调用方。下游服务因超时开始重试，导致请求量翻倍，最终形成了级联雪崩式的故障扩散。",
    "origins": "这一概念有着深厚的社会学和经济学根源——最早可追溯至亚当·斯密（Adam Smith）的「看不见的手」和罗伯特·默顿（Robert K. Merton）在 1936 年对社会行动意外后果的系统性分析。在软件工程领域，随着系统复杂性增长，这一法则成为了核心工程准则。",
    "takeaways": [
      "复杂系统中的任何变更都可能产生不可预见的副作用。",
      "降低风险的方法：小批量变更、完善的测试、渐进式发布（如灰度或金丝雀部署）。",
      "监控和可观测性是发现意外后果的关键——如果看不到就不知道哪里出问题了。",
      "不可能完全消除意外后果——建立快速检测和回滚的机制至关重要。"
    ],
    "related": [
      "hyrums-law",
      "galls-law"
    ],
    "further_reading": [
      {
        "title": "Unintended consequences - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Unintended_consequences",
        "description": "维基百科关于意外后果的条目"
      },
      {
        "title": "The Unanticipated Consequences of Purposive Social Action",
        "url": "https://www.jstor.org/stable/2084615",
        "description": "罗伯特·K·默顿 1936 年的原始论文"
      },
      {
        "title": "Freakonomics",
        "url": "https://freakonomics.com/",
        "description": "探索意外后果的流行经济学博客与丛书"
      }
    ]
  },
  {
    "title": "扎温斯基定律",
    "titleEn": "Zawinski's Law",
    "slug": "zawinskis-law",
    "description": "每个程序都会不断扩展，直到能够读取邮件。",
    "descriptionEn": "Every program attempts to expand until it can read mail.",
    "experience": "senior",
    "group": "Architecture",
    "image": "/images/laws/zawinski-law.png",
    "overview": "杰米·扎温斯基（Jamie Zawinski）观察到一种被称为「软件膨胀」（或「功能蠕变」）的现象：成功的程序倾向于不断添加新功能，直到它们变得极其复杂。最初做一件事情的简单工具最终演变为一个庞大的平台。扎温斯基用「读取邮件」来象征这些过度的功能，因为他参与开发了 Netscape Navigator，目睹了浏览器从简单的网页查看器膨胀为一个集成了邮件客户端、新闻组阅读器和网页编辑器的庞然大物（这就是后来的 Mozilla/SeaMonkey 套件）。该定律是对 YAGNI 和 KISS 等极简主义原则的有力支持。",
    "examples": "Netscape Navigator 最初只是一个网页浏览器。随着时间推移，它新增了邮件客户端、新闻组阅读器、网页编辑器，最终发展为庞大的 Communicator 套件。更近期的例子：一款笔记应用从简单的文字记录开始，逐渐添加了待办管理、聊天、日历、表格、看板，最终变成了一个功能臃肿的万能工具，反而失去了笔记记录这一最初的核心优势。",
    "origins": "杰米·扎温斯基（Jamie Zawinski，又名 jwz）是 Netscape 和 Mozilla 项目的著名程序员。他在讨论这种软件膨胀现象时提出了这一充满讽刺意味的定律，后来成为软件工程领域关于功能蠕变的经典引述。",
    "takeaways": [
      "成功的软件倾向于不断添加功能，最终失焦并变得臃肿——这就是‘功能蠕变’。",
      "当你的工具开始做那些与核心功能无关的事情时，你要意识到这可能有问题。",
      "保持产品专注需要持续的纪律——对功能请求说‘不’是一项重要技能。",
      "扎温斯基定律完美地印证了 KISS 和 YAGNI 原则的必要性。"
    ],
    "related": [
      "second-system-effect",
      "yagni"
    ],
    "further_reading": [
      {
        "title": "Zawinski's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Jamie_Zawinski#Zawinski's_Law",
        "description": "维基百科关于扎温斯基定律的条目"
      },
      {
        "title": "Don't Let Architecture Astronauts Scare You",
        "url": "https://www.joelonsoftware.com/2001/04/21/dont-let-architecture-astronauts-scare-you/",
        "description": "乔尔·斯波尔斯基关于软件膨胀与平台化的经典文章"
      }
    ]
  },
  {
    "title": "邓巴数",
    "titleEn": "Dunbar's Number",
    "slug": "dunbars-number",
    "description": "一个人能够维持稳定社交关系的认知上限约为 150 人。",
    "descriptionEn": "There is a cognitive limit of about 150 stable relationships one person can maintain.",
    "experience": "senior",
    "group": "Teams",
    "image": "/images/laws/dunbar-number.png",
    "overview": "英国人类学家罗宾·邓巴（Robin Dunbar）发现，人类大脑新皮层的大小与社交群体规模之间存在相关性，由此推断出一个人能够维持稳定社交关系的认知上限约为 150 人。在软件工程和组织管理中，邓巴数有重要含义：团队超过 150 人后，成员无法再通过自然的人际交往来了解彼此——正式的管理流程、沟通协议和层级结构变得不可或缺。许多成功的公司（如戈尔公司、早期的 Valve）将团队限制在 150 人以下，当一个单位达到这个规模时就会拆分。在开源社区中，活跃的核心贡献者也往往在邓巴数范围内。",
    "examples": "一家快速成长的初创公司发现，120 人左右时团队沟通顺畅自然，大家彼此认识。但当员工超过 160 人后，人们开始抱怨「不知道谁在做什么」，跨团队的误解增多。公司随后被重组为更小的部门，每个部门少于 100 人。另一个例子：戈尔公司（W.L. Gore & Associates）刻意将每个工厂或办公室限制在约 150 人，以保持非正式沟通和社会凝聚力。",
    "origins": "罗宾·邓巴（Robin Dunbar）在 1992 年发表于《人类进化杂志》（Journal of Human Evolution）的论文中提出了这一数字。该理论现已成为心理学、社会学和人类学的基础概念，也被广泛应用于组织管理和团队建设策略。",
    "takeaways": [
      "团队规模超过约 150 人后，非正式的人际交往将变得不可靠——需要正式的流程和层级。",
      "将大型组织拆分为小于邓巴数的小团队能改善沟通、信任和协作效率。",
      "在快速增长的初创公司中，要预见当跨越邓巴数阈值时文化可能发生的改变。",
      "对于管理者而言，邓巴数提供了一个关于组织规模管理的有用参考框架。"
    ],
    "related": [
      "conways-law",
      "brooks-law"
    ],
    "further_reading": [
      {
        "title": "Dunbar's Number - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dunbar%27s_number",
        "description": "维基百科关于邓巴数的条目"
      },
      {
        "title": "Grooming, Gossip, and the Evolution of Language",
        "url": "https://www.amazon.com/Grooming-Gossip-Evolution-Language-Dunbar/dp/0674363361",
        "description": "罗宾·邓巴引入这一概念的著作"
      }
    ]
  },
  {
    "title": "林格尔曼效应",
    "titleEn": "The Ringelmann Effect",
    "slug": "ringelmann-effect",
    "description": "个体生产力随着群体规模的增大而下降。",
    "descriptionEn": "Individual productivity decreases as group size increases.",
    "experience": "mid",
    "group": "Teams",
    "image": "/images/laws/ringelmann-effect.png",
    "overview": "林格尔曼效应描述了「社会懈怠」（social loafing）现象：当更多人加入一项任务时，每个人贡献的个体努力反而减少。这一效应最早由法国农业工程师马克斯·林格尔曼（Max Ringelmann）通过拔河实验发现——一个人拉绳时用尽全力，而八个人一起拉时，每个人的平均出力仅为个人状态下的 49%。在软件开发中，这意味着盲目扩大团队并不会线性增加产出：当团队规模过大时，个体开发者可能感到责任感被稀释，将自己的贡献视为无关紧要，从而降低整体生产力。小型、有所有权的团队——而不是大型、匿名化的群体——在软件工程中通常表现更佳。",
    "examples": "一个大型开发团队被分配去修复一组 bug，每个人假设同事会处理困难的部分。一周后，很少有 bug 被真正修复——每个人都做了些轻松的标签调整，却没有人去攻克复杂的问题。相比之下，当一个三人团队被明确指定负责同一个问题时，他们立即澄清了每个人的具体责任，修复工作顺利进行。",
    "origins": "马克斯·林格尔曼（Max Ringelmann，1861-1931）在 1913 年通过拔河实验发现了这一效应。尽管研究已有百年历史，其核心发现在今天的团队管理和软件开发中依然具有重要的实践指导意义。",
    "takeaways": [
      "团队越大，个体的责任感被稀释的风险越大——明确每个人的具体责任至关重要。",
      "小型、高自主权的团队通常比大型、层级化的团队产出的质量更好、效率更高。",
      "林格尔曼效应与布鲁克斯定律相辅相成——增加人手不仅会产生通信开销，还会减少个体投入。",
      "对抗方法是：小团队、明确任务分工、清晰的问责制度和透明的贡献可见性。"
    ],
    "related": [
      "brooks-law",
      "dunbars-number",
      "conways-law"
    ],
    "further_reading": [
      {
        "title": "Ringelmann Effect - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ringelmann_effect",
        "description": "维基百科关于林格尔曼效应的条目"
      },
      {
        "title": "Social Loafing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Social_loafing",
        "description": "效应背后的社会懈怠心理现象"
      },
      {
        "title": "The Two Pizza Rule",
        "url": "https://aws.amazon.com/executive-insights/content/amazon-two-pizza-team/",
        "description": "亚马逊保持团队精简高效的「双披萨」方法"
      },
      {
        "title": "The Tipping Point",
        "url": "https://amzn.to/4jfJ1Hb",
        "description": "马尔科姆·格拉德威尔探讨小变化如何产生大影响的著作"
      },
      {
        "title": "From Aristotle to Ringelmann: A Large-Scale Analysis of Team Productivity and Coordination in Open Source Software Projects",
        "url": "https://doi.org/10.1007/s10664-015-9406-4",
        "description": "Scholtes, Mavrodiev & Schweitzer (2016) — 开源软件项目中团队生产力与协调的实证研究"
      }
    ]
  },
  {
    "title": "普莱斯定律",
    "titleEn": "Price's Law",
    "slug": "prices-law",
    "description": "参与者总数的平方根完成了 50% 的工作。",
    "descriptionEn": "The square root of the total number of participants does 50% of the work.",
    "experience": "senior",
    "group": "Teams",
    "image": "/images/laws/prices-law.png",
    "overview": "德里克·普莱斯（Derek Price）发现，在任何给定领域中，一小部分高产出者贡献了大部分成果。具体而言：如果团队有 N 个人，那么 √N 个人会完成 50% 的工作。这意味着在一个 25 人的团队中，5 个人承担了 50% 的产出；而在 100 人的组织中，仅 10 个人完成了一半的工作。管理者需要意识到这种生产力分布的不均衡性，认识到依赖少数高产出者既是一种优势，也是一种风险——如果这些人离开了会怎样？这需要主动的继任计划和知识传承策略。",
    "examples": "在一个 36 人的开发团队中，贡献分析显示约 6 名开发者（√36=6）贡献了所有代码提交的 50%、代码评审的 55% 和设计文档的 60%。这些高产者往往是架构决策的核心，如果失去任何一位，都会显著影响项目进度。",
    "origins": "德里克·德索拉·普莱斯（Derek J. de Solla Price）在 1963 年出版的《小科学，大科学》（Little Science, Big Science）一书中观察到学术出版物中的不平等现象，指出一小群高产作者贡献了论文的很大比例。此后，该定律被观察到适用于编程贡献、专利、维基百科编辑等众多领域。",
    "takeaways": [
      "在任何团队中，一小群高产者通常贡献了大部分产出——这是常态，不是异常。",
      "管理者应识别并支持高产者，同时确保他们不成为单点故障。",
      "通过指导、结对编程和文档化，将高产者的知识传播到团队更广的范围。",
      "不要尝试强制平等产出——而是要帮助每个人发挥最大作用，同时降低单点依赖风险。"
    ],
    "related": [
      "ringelmann-effect",
      "brooks-law",
      "dunbars-number"
    ],
    "further_reading": [
      {
        "title": "Price's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Price%27s_law",
        "description": "维基百科关于普莱斯定律及其经验挑战的条目"
      },
      {
        "title": "Derek J. de Solla Price - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Derek_J._de_Solla_Price",
        "description": "发现该定律的科学家传记"
      }
    ]
  },
  {
    "title": "普特定律",
    "titleEn": "Putt's Law",
    "slug": "putts-law",
    "description": "懂技术的人不管理，管理的人不懂技术。",
    "descriptionEn": "Those who understand technology don't manage it, and those who manage it don't understand it.",
    "experience": "senior",
    "group": "Teams",
    "image": "/images/laws/putts-law.png",
    "overview": "阿奇博尔德·普特（Archibald Putt）以幽默的方式揭示了一个令人尴尬的组织现实：随着人们在组织层级中晋升，他们的管理职责增多而实际技术工作减少，最终导致管理决策由脱离技术现实的人来制定。反之，最了解技术的人往往没有决策权。这会引发一系列问题：技术债务不断积累（因为管理者不理解其成本）、不切实际的截止日期、以及被过度简化的技术决策。应对方式是确保技术领导者始终保留实际决策权，并保持管理者与一线工程实践之间的紧密联系。",
    "examples": "一个大型技术组织中，CIO 拥有 MBA 学位但从未编写过代码。他在不了解技术复杂性的情况下承诺了一个激进的交付日期，团队被迫走捷径和积累技术债务。同时，一位资深架构师完全懂得为什么需要重构，却没有决策权推动这项工作。解决这一问题的方法是创建「技术负责人」或「工程经理」岗位，选择同时具有技术专长和管理技能的人。",
    "origins": "阿奇博尔德·普特（Archibald Putt）在 1976 年的著作《普特定律与成功的技术管理》（Putt's Law and the Successful Technocrat）中提出了这一定律。尽管以半开玩笑的语气写成，但其观察在技术行业中引起了广泛共鸣。",
    "takeaways": [
      "管理层的技术脱节会在长期导致糟糕的决策——保持技术领导力至关重要。",
      "最佳的技术组织确保管理链中有技术能力——管理者不一定需要是最强的程序员，但不能完全脱离技术。",
      "创建一个平行的技术职业轨道（IC 路线），让最好的技术人员保持技术实践，同时拥有决策影响力。",
      "工程师在缺少技术理解的组织中工作，往往会导致士气和留存率问题。"
    ],
    "related": [
      "peter-principle",
      "dilbert-principle"
    ],
    "further_reading": [
      {
        "title": "Putt's Law and the Successful Technocrat - Amazon",
        "url": "https://amzn.to/4aAuOm0",
        "description": "阿奇博尔德·普特的讽刺性原著"
      },
      {
        "title": "The Boeing 737 MAX: Lessons for Engineering Ethics",
        "url": "https://doi.org/10.1007/s11948-020-00252-y",
        "description": "Herkert, Borenstein & Miller (2020) — 探讨管理决策凌驾于技术专长之上如何导致灾难"
      }
    ]
  },
  {
    "title": "彼得原理",
    "titleEn": "Peter Principle",
    "slug": "peter-principle",
    "description": "在层级体系中，每个员工都倾向于晋升到自己不能胜任的级别。",
    "descriptionEn": "In a hierarchy, every employee tends to rise to their level of incompetence.",
    "experience": "mid",
    "group": "Teams",
    "image": "/images/laws/peter-principle.png",
    "overview": "劳伦斯·彼得（Laurence J. Peter）观察到，在层级组织中，员工因为表现出色而被不断晋升——直到达到一个他们不再胜任的级别。到了这个级别后，他们不再晋升，也就永远留在了自己不胜任的岗位上。在软件工程中这种模式尤其明显：一位优秀的程序员被晋升为团队领导，但如果缺乏领导技能，她可能在这个新角色中挣扎，而组织同时失去了一位优秀的程序员。解决之道在于：提供不依赖管理晋升的职业成长路径（如技术专家轨道），并允许「横向」或「向下」的调动而不附加污名。",
    "examples": "一位明星级软件工程师不断晋升，先是高级工程师，然后是技术负责人，接着是工程经理，最后是总监。她在编程和技术设计方面非常出色，但在管理 40 人和处理预算方面非常糟糕。她在总监岗位上很不快乐、效率低下，而组织也失去了一位出色的工程师。如果有平行的 IC 轨道，她本可以继续作为首席工程师发挥最大的价值。",
    "origins": "劳伦斯·J·彼得（Laurence J. Peter）和雷蒙德·赫尔（Raymond Hull）在 1969 年的著作《彼得原理》中提出了这一概念，该书成为了管理科学领域的畅销著作。",
    "takeaways": [
      "优秀的个人贡献者不一定能成为优秀的管理者——技能组合根本不同。",
      "组织需要双重职业轨道：管理路线和技术专家（IC）路线。",
      "晋升奖励的是当下的表现，而不是未来角色所需的潜力——这是组织需要修正的结构性缺陷。",
      "在评估晋升时，要考察个人是否具备目标角色的胜任能力，而不仅仅是在当前岗位上的成功表现。"
    ],
    "related": [
      "dilbert-principle",
      "putts-law"
    ],
    "further_reading": [
      {
        "title": "The Peter Principle - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Peter_principle",
        "description": "彼得原理及其影响的概述"
      },
      {
        "title": "The Peter Principle: Why Things Always Go Wrong - Amazon",
        "url": "https://amzn.to/48XHHW7",
        "description": "劳伦斯·J·彼得 1969 年的原著"
      }
    ]
  },
  {
    "title": "巴士因子",
    "titleEn": "Bus Factor",
    "slug": "bus-factor",
    "description": "团队中关键成员的最小数量，他们的丧失将使项目陷入严重困境。",
    "descriptionEn": "The minimum number of team members whose loss would put the project in serious trouble.",
    "experience": "mid",
    "group": "Teams",
    "image": "/images/laws/bus-factor.png",
    "overview": "巴士因子（也被称为「彩票因子」）是一个略带黑色幽默的度量标准，用于评估关键人员风险：如果 N 个关键成员同时「被巴士撞了」（或更现实地——同时离职、生病、或发生意外），项目是否还能继续？巴士因子为 1 意味着整个项目依赖一个人，这是极其危险的。高表现团队的目标是提高巴士因子——通过代码评审、结对编程、全面的文档和多技能交叉培训，确保没有人是唯一理解某个关键部分的人。",
    "examples": "某金融交易系统运行良好已经有五年了。某天，唯一了解核心匹配引擎的架构师去独家创业了。引擎出现了一个小 bug——只有一个人能修复。由于缺乏文档，所涉代码晦涩难懂，团队花了三个月才恢复生产稳定性。巴士因子为 1。相比之下，另一个团队刻意确保每个模块至少有两个人了解，实践结对编程，并在团队内部轮换任务。这种交叉培训使得巴士因子升高，降低了人员风险。",
    "origins": "这一概念在软件工程社区中自然产生，作为评估项目健康度和可持续性的一项经验法则。虽然没有单一起源，但它已经成为风险管理和团队健康评估中普遍使用的术语。",
    "takeaways": [
      "巴士因子低意味着项目存在严重的单点故障风险——一个人或多个人是关键瓶颈。",
      "提高巴士因子的方法：代码评审、结对编程、文档、任务轮换和交叉培训。",
      "定期评估团队巴士因子——如果某个模块只有一个主人，那就是高风险。",
      "巴士因子不仅是技术问题，也是管理和业务连续性问题。"
    ],
    "related": [
      "conways-law",
      "brooks-law",
      "dunbars-number"
    ],
    "further_reading": [
      {
        "title": "Bus Factor - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bus_factor",
        "description": "巴士因子概念及其影响的概述"
      },
      {
        "title": "Left-pad incident - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Npm_left-pad_incident",
        "description": "开源生态中巴士因子风险的现实案例——left-pad 事件"
      },
      {
        "title": "The Dead Sea Effect - Bruce F. Webster",
        "url": "https://brucefwebster.com/2008/04/11/the-wetware-crisis-the-dead-sea-effect/",
        "description": "描述人才如何从功能失调组织中流失的原创文章"
      },
      {
        "title": "If Guido was hit by a bus?",
        "url": "https://legacy.python.org/search/hypermail/python-1994q2/1040.html",
        "description": "Michael McLay 1994 年的邮件列表帖子——巴士因子概念最早的参考文献之一"
      },
      {
        "title": "Organizational Patterns of Agile Software Development",
        "url": "https://www.wiley.com/en-us/Organizational+Patterns+of+Agile+Software+Development-p-9780131467408",
        "description": "Coplien & Harrison (2004) — 构建高效软件组织的模式"
      }
    ]
  },
  {
    "title": "呆伯特原则",
    "titleEn": "Dilbert Principle",
    "slug": "dilbert-principle",
    "description": "公司倾向于将不称职的员工晋升到管理层，以限制他们能造成的损害。",
    "descriptionEn": "Companies tend to promote incompetent employees to management to limit the damage they can do.",
    "experience": "senior",
    "group": "Teams",
    "image": "/images/laws/dilbert-principle.png",
    "overview": "斯科特·亚当斯（Scott Adams）通过他的「呆伯特」漫画系列，以讽刺口吻提出：最不称职的员工被从技术岗位上移除，晋升到管理层——因为在那里他们对实际产品的负面影响较小。虽然这是一个充满幽默感的观察而非严肃的管理理论，但它之所以引起共鸣，是因为技术人员普遍有过与管理层脱节合作的经历。这一定律警示组织：不应将管理角色作为处理技术能力不足者的「倾倒场」，而应认真选拔具备领导素质和良好判断力的管理者。",
    "examples": "一位高级开发人员在两年内制造了三个严重生产事故——每个都源于糟糕的设计决策。为了「处理掉」他而不解雇，管理层晋升他为「工程卓越总监」，负责制定编码标准和主持架构评审。讽刺的是，他原来的同事现在不得不在他主持的会议上为自己的技术方案辩护。",
    "origins": "斯科特·亚当斯（Scott Adams）在 1994 年他的《呆伯特原则》一书中，以对科技公司管理实践的讽刺观察提出了这一观点。呆伯特漫画自 1989 年以来一直在讽刺办公室文化。",
    "takeaways": [
      "不要将管理岗位用作技术能力不足者的避风港——管理是一项真正的技能，而非安慰奖。",
      "无效的管理者对整个组织造成的伤害比任何个人贡献者都大——选择管理者时要认真评估。",
      "确保选拔管理者的依据是他们的领导潜力，而非其他什么理由。",
      "为贡献者创建非管理岗位的晋升路径，阻止将所有人推入管理层的诱惑。"
    ],
    "related": [
      "peter-principle",
      "putts-law",
      "brooks-law"
    ],
    "further_reading": [
      {
        "title": "The Dilbert Principle - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dilbert_principle",
        "description": "斯科特·亚当斯关于职场讽刺的漫画系列"
      },
      {
        "title": "The Dilbert Principle - Amazon",
        "url": "https://amzn.to/4jgz6kJ",
        "description": "哈佛商业评论关于为什么优秀工程师不一定能成为优秀管理者"
      },
      {
        "title": "A Cubicle's-Eye View of Bosses, Meetings, Management Fads and Other Workplace Afflictions",
        "url": "https://www.amazon.com/Dilbert-Principle-Cubicles-Eye-Meetings-Management/dp/0887308589",
        "description": "关于科技公司中管理选拔机制的批判性分析"
      }
    ]
  },
  {
    "title": "帕金森定律",
    "titleEn": "Parkinson's Law",
    "slug": "parkinsons-law",
    "description": "工作会不断扩展，填满为其完成可用的全部时间。",
    "descriptionEn": "Work expands to fill the time available for its completion.",
    "experience": "junior",
    "group": "Planning",
    "image": "/images/laws/parkinson-law.png",
    "overview": "西里尔·诺斯科特·帕金森（C. Northcote Parkinson）在《经济学人》的一篇文章中幽默地观察到，官僚机构倾向于不断膨胀，而与实际工作量无关。应用于软件开发：如果一个任务给了两周时间，它就会用满两周——即使一周本可以完成。如果给出一个宽松的时间表，人们往往会用较慢的工作节奏、过度打磨细节或过度设计来填充这段时间。这不意味着我们应该设置不切实际的紧张截止日期——那会导致过劳和抄近路——而是应该使用时间盒（timeboxing）和增量交付等技巧来保持专注。",
    "examples": "一个团队预估某项功能需要四周。当项目启动后推迟两周时，即使减少了两周的可用时间，他们仍然在截止日期前完成了功能——虽然在压力下，但质量没有实质差别。他们意识到最初的四周估算包含了缓冲区，而帕金森定律使其中的两周被非核心活动消耗。另一团队为同一项任务使用时间盒——必须在两周内交付一个最小可行版本，四周后交付完整版——结果交付的质量和完成度都比没有时间约束时要好。",
    "origins": "西里尔·诺斯科特·帕金森（C. Northcote Parkinson）在 1955 年发表于《经济学人》的文章中首次描述了这一现象，后来扩展为一本书《帕金森定律：追求进步》（Parkinson's Law: The Pursuit of Progress）。",
    "takeaways": [
      "工作倾向于填满所有可用的时间——设置合理的截止日期来对抗这一效应。",
      "使用时间盒和增量交付来保持专注并避免过度打磨。",
      "约束是创造力的催化剂——有限的资源迫使优先排序和创新。",
      "但不要设定不切实际的紧张时间表——那会适得其反。找到挑战性与可行性之间的平衡。"
    ],
    "related": [
      "hofstadters-law",
      "brooks-law"
    ],
    "further_reading": [
      {
        "title": "Parkinson's Law (Original Essay)",
        "url": "https://www.economist.com/news/1955/11/19/parkinsons-law",
        "description": "西里尔·诺斯科特·帕金森关于官僚主义与工作量膨胀的经典著作"
      },
      {
        "title": "Parkinson's Law: The Book",
        "url": "https://amzn.to/4jg0OOD",
        "description": "关于时间盒和增量交付如何提高团队效率的研究"
      },
      {
        "title": "Parkinson's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Parkinson%27s_law",
        "description": "敏捷估算和项目规划中的实践技术"
      }
    ]
  },
  {
    "title": "九十九十规则",
    "titleEn": "The Ninety-Ninety Rule",
    "slug": "ninety-ninety-rule",
    "description": "前 90% 的代码占据了前 90% 的开发时间，剩余的 10% 的代码占据另外 90% 的开发时间。",
    "descriptionEn": "The first 90% of the code accounts for the first 90% of development time; the remaining 10% accounts for the other 90%.",
    "experience": "mid",
    "group": "Planning",
    "image": "/images/laws/90-90-rule.png",
    "overview": "汤姆·卡吉尔（Tom Cargill）在贝尔实验室以黑色幽默的方式指出：开发者和项目经理系统性地低估了完成系统最后 10% 功能所需的时间。处理边界情况、错误条件、集成摩擦、性能调优、UI 细节打磨——这些看似微小的收尾工作，累积起来往往需要与原计划等量甚至更长的时间。这条规则让开发者保持谦逊，提醒他们不要在早期进度顺利时过早宣布胜利：真正难的地方往往在细节之中。",
    "examples": "团队宣称在四个星期后功能开发完成了 90%——所有 API 都在工作，UI 也搭建好了。他们向利益相关者宣布还剩最后一周。但接下来的「最后 10%」——错误处理、边界情况、响应式适配、无障碍访问、浏览器兼容性、加载状态、空状态、性能优化、安全审计——花了额外四个星期。项目最终花了两倍于原计划的时间。",
    "origins": "汤姆·卡吉尔（Tom Cargill）在贝尔实验室编程时提出了这一观察。乔恩·本特利（Jon Bentley）在 1985 年 9 月《ACM 通讯》的「编程珍珠」专栏中公开引用了这一定律。",
    "takeaways": [
      "永远不要假设「90% 完成」就意味着接近完成——最后的 10% 往往和前 90% 花一样长的时间。",
      "尽早处理边界情况和错误处理——把它们放在最后会导致灾难性的延迟。",
      "向利益相关者沟通进度时不要过度承诺——完成度是非线性的。",
      "风险管理中为不确定的「打磨」阶段预留充足的时间。"
    ],
    "related": [
      "hofstadters-law",
      "parkinsons-law",
      "pareto-principle"
    ],
    "further_reading": [
      {
        "title": "Programming Pearls - Bumper Sticker Computer Science",
        "url": "https://moss.cs.iit.edu/cs100/Bentley_BumperSticker.pdf",
        "description": "乔恩·本特利推广该定律的原始专栏"
      },
      {
        "title": "Programming Pearls (Book)",
        "url": "https://amzn.to/49bLHkn",
        "description": "乔恩·本特利关于编程智慧与技巧的经典著作"
      },
      {
        "title": "Ninety-Ninety Rule - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ninety%E2%80%93ninety_rule",
        "description": "该规则及其在贝尔实验室起源的概述"
      },
      {
        "title": "Identifying and Mitigating the Ninety-Ninety Rule in Software Development",
        "url": "https://dev.to/ben/identifying-and-mitigating-the-ninety-ninety-rule-in-software-development-4ap3",
        "description": "识别与应对九十九十陷阱的实用策略"
      }
    ]
  },
  {
    "title": "侯世达定律",
    "titleEn": "Hofstadter's Law",
    "slug": "hofstadters-law",
    "description": "事情花费的时间总是比你预期的要长，即使你已经将侯世达定律考虑在内。",
    "descriptionEn": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
    "experience": "junior",
    "group": "Planning",
    "image": "/images/laws/hofstadter-law.png",
    "overview": "道格拉斯·侯世达（Douglas Hofstadter）这条自指式的幽默法则是关于估算的最深刻洞见之一。它指出：即使你已经知道事情往往比预期要长，并在估算中增加了缓冲，你仍然会低估。因为你增加的缓冲本身也受到同一认知偏差的影响。在软件工程中，我们系统性地低估任务所需时间的原因有很多：未知的未知、意外的技术障碍、被忽略的集成工作——但侯世达定律的核心是元层次的：我们对偏差的纠正也受制于同样的偏差。应对策略不是在估算上疯狂加倍缓冲时间，而是及早验证假设，频繁交付增量，并根据真实数据调整估算。",
    "examples": "一位开发者估算某项功能需要 3 天。项目经理知道开发者倾向于乐观估计，所以上报了 5 天。CTO 知道项目经理加了缓冲，所以上报了 8 天。功能最终花了 12 天——因为一个从来没人在启动前注意到的第三方 SDK 兼容性问题。叠加了多层缓冲，仍然低估了，精确印证了侯世达定律。",
    "origins": "道格拉斯·侯世达（Douglas Hofstadter）在其 1979 年普利策奖获奖作品《哥德尔、埃舍尔、巴赫：集异璧之大成》中提出了这一定律，最初用于描述计算机下棋领域中的递归低估现象。",
    "takeaways": [
      "估算即使嵌套多层缓冲也总是过低，因为未知的未知总是存在的。",
      "不要依赖更激进的缓冲来克服估算偏差——那只会无限扩展。",
      "更好的方法：快速验证假设，频繁交付小增量，根据真实数据调整估算。",
      "使用不确定性锥（cone of uncertainty）等模型来沟通估算的范围，而非单一数字。"
    ],
    "related": [
      "parkinsons-law"
    ],
    "further_reading": [
      {
        "title": "Gödel, Escher, Bach: An Eternal Golden Braid",
        "url": "https://amzn.to/4jjKSLl",
        "description": "道格拉斯·侯世达关于认知科学和自引用系统的经典著作"
      },
      {
        "title": "The Mythical Man-Month",
        "url": "https://amzn.to/49cAqQO",
        "description": "关于软件开发中认知偏差和估算陷阱的分析"
      },
      {
        "title": "Why Software Projects Take Longer Than You Think",
        "url": "https://erikbern.com/2019/04/15/why-software-projects-take-longer-than-you-think-a-statistical-model.html",
        "description": "关于如何利用真实数据进行估算和跟踪的实践指南"
      }
    ]
  },
  {
    "title": "古德哈特定律",
    "titleEn": "Goodhart's Law",
    "slug": "goodharts-law",
    "description": "当一个度量指标变成了目标，它就不再是一个好的度量指标。",
    "descriptionEn": "When a measure becomes a target, it ceases to be a good measure.",
    "experience": "senior",
    "group": "Planning",
    "image": "/images/laws/goodharts-law.png",
    "overview": "经济学家查尔斯·古德哈特（Charles Goodhart）观察到，一旦一个统计指标被用于政策目标，它就开始失去作为衡量标准的能力——因为人们会开始游戏这个指标，而不再尝试实现它本应衡量的底层结果。在软件工程中这尤其危险：当开发者被告知他们的表现将通过代码行数、提交次数、修复 bug 数量或故事点数来衡量时，他们会优化这些指标（写更多行、拆分为多个提交、修复表面 bug 而忽略底层架构问题），而非提升真正的工程质量和业务价值。好的度量指标应作为团队对话和自我改进的参考工具，而非个人奖惩的依据。",
    "examples": "一家公司开始用已解决的 JIRA 工单数量来评估开发者。很快，开发者开始只接简单的工单和琐碎的 bug，避免复杂的架构改进（这些不能轻易体现为高工单数）。工单关闭数飙升，但产品质量下滑——因为没人愿意花时间做根本性的重构。另一团队被要求达到高测试覆盖率——他们便开始写大量测试了 getter/setter 的测试，将覆盖率推至 95%，但没有任何有意义的业务逻辑被真正验证。",
    "origins": "查尔斯·古德哈特（Charles Goodhart）在 1975 年发表这篇论文时是英格兰银行的首席经济顾问。他提出的最初形式针对宏观经济政策制定，但此后该定律在从教育、医疗到软件工程的各种人类系统中被反复印证。",
    "takeaways": [
      "当一个指标被用作目标时，它就会被游戏化，不再有意义地衡量它本应衡量的东西。",
      "将指标与激励脱钩——指标用于洞察和自我改进，不要用于绩效评估或奖金。",
      "使用定性评估和多维度指标组合，而非任何单一数字来评估团队表现。",
      "定期审视你的指标——问问它们是否仍在提供有意义的信息，还是已经被无意识优化。"
    ],
    "related": [
      "dilbert-principle",
      "parkinsons-law"
    ],
    "further_reading": [
      {
        "title": "Goodhart's Law: How Measuring The Wrong Things Drive Immoral Behaviour",
        "url": "https://coffeeandjunk.com/goodharts-campbells-law/",
        "description": "深入探讨古德哈特定律及其对组织的影响"
      },
      {
        "title": "Goodhart's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Goodhart%27s_law",
        "description": "该定律的起源与应用概述"
      },
      {
        "title": "The Tyranny of Metrics",
        "url": "https://amzn.to/4ji7rzY",
        "description": "杰里·穆勒关于指标执念的意外后果的著作"
      },
      {
        "title": "Enshittification - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Enshittification",
        "description": "当指标取代用户价值成为目标时，平台如何退化"
      }
    ]
  },
  {
    "title": "吉尔布定律",
    "titleEn": "Gilb's Law",
    "slug": "gilbs-law",
    "description": "任何你需要量化的事物，都可以用某种方式来度量，而且有度量总比没有度量要好。",
    "descriptionEn": "Anything you need to quantify can be measured in some way better than not measuring it.",
    "experience": "mid",
    "group": "Planning",
    "image": "/images/laws/gilbs-law.png",
    "overview": "汤姆·吉尔布（Tom Gilb）回应了古德哈特定律可能引发的度量瘫痪。该定律主张：即便是近似或间接的度量，也总比完全没有好。当某个方面至关重要（性能、客户满意度、代码可维护性）时，你应当尝试去度量它，否则你将毫无客观反馈可言。吉尔布定律很好地回应了「这个方面是不可度量的，所以我们不去尝试」这种说法。这些度量指标不会完美，但拥有它们能给你带来洞察力和改进的起点，这比完全一无所知要好得多。",
    "examples": "度量开发人员生产力是出了名的困难（代码行数是糟糕的代理变量，故事点也可能不一致）。然而，你可以使用部署频率或变更前置时间（如 DORA 指标）作为代理。它们并不能涵盖一切，但能给你提供可行动的数据。如果部署频率下降，管道可能存在某种问题。跟踪技术债务也没有完美的度量方式，但跟踪代码复杂度评分、事故率和开发者调查等指标，能让你获得原本不具备的可见性。",
    "origins": "汤姆·吉尔布（Tom Gilb）是一位软件工程顾问和作者，他在量化需求和规划中使用度量的工作中提出了这一定律，与他的 Planguage 和渐进式项目管理方法相辅相成。",
    "takeaways": [
      "拥有关于某个现象的某些数据或指标，比完全看不见要好，只要你能理解这些指标的局限性。",
      "与古德哈特定律警告不要误用指标相比，吉尔布定律提醒我们不要完全抛弃度量。",
      "从一个基本的度量开始，并随着时间推进不断完善它。度量的行为本身就能帮助团队聚焦并识别趋势。",
      "即便是一个近似或间接的度量，也总比没有更好。"
    ],
    "related": [
      "goodharts-law",
      "parkinsons-law"
    ],
    "further_reading": [
      {
        "title": "Tom Gilb - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tom_Gilb",
        "description": "汤姆·吉尔布对软件工程贡献的概述"
      },
      {
        "title": "Competitive Engineering",
        "url": "https://amzn.to/49AqaT1",
        "description": "汤姆·吉尔布关于量化需求与设计的著作"
      },
      {
        "title": "DORA Metrics",
        "url": "https://dora.dev/guides/dora-metrics-four-keys/",
        "description": "衡量 DevOps 性能的四个关键 DORA 指标"
      }
    ]
  },
  {
    "title": "墨菲定律",
    "titleEn": "Murphy's Law / Sod's Law",
    "slug": "murphys-law",
    "description": "任何可能出错的事情，最终都会出错。",
    "descriptionEn": "Anything that can go wrong will go wrong.",
    "experience": "junior",
    "group": "Quality",
    "image": "/images/laws/murphy-law.png",
    "overview": "在软件领域，墨菲定律常被用来解释 bug 和生产事故：代码中任何可能出错的情况（空指针、竞态条件、网络中断）最终都会出现，尤其是在用户基数庞大或最糟糕的时刻。这一定律鼓励开发人员编写更具防御性的代码——检查空值、处理异常、验证输入，并在出错时优雅地降级。它同时也提醒 DevOps 团队通过实施监控、支持回滚和制定应急预案来预判故障。",
    "examples": "如果一个网页表单字段可以接受文本，那么必定会有人输入一万个怪异符号来测试边界。如果内存可能会耗尽，那它就会在多个进程恰好对齐时耗尽。一个著名的现实案例是比尔·盖茨在 Windows 98 发布会上的蓝屏死机——如果某个东西可能出故障，它很可能就会在那时出故障。假设一个函数假定输入文件一定存在——墨菲定律说，某一天那个文件会不存在或已损坏，因此你的代码应该处理这种场景。服务器会在你唯一休息的那天崩溃，因为那正是最容易造成麻烦的时刻。",
    "origins": "这一定律归功于爱德华·A·墨菲二世（Edward A. Murphy Jr.），他是一位 1949 年从事火箭滑车实验的工程师。该定律首先在航空航天领域流行，随后传播到所有工程领域。在软件领域，它自有 bug 以来就一直存在，时刻提醒着我们：只要有一个未经测试的场景，就会有一个用户发现它。",
    "takeaways": [
      "如果某个错误可能发生，它就一定会发生——在规划和编码时要考虑到这一点，采取防御性策略。",
      "添加错误处理、备份和检查机制。",
      "边缘情况在生产环境中必然出现，为这些场景编写测试。",
      "不要假设「这不太可能发生」——在足够长的时间尺度上，一切可能的事情都会发生。"
    ],
    "related": [
      "confirmation-bias"
    ],
    "further_reading": [
      {
        "title": "Murphy's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Murphy%27s_law",
        "description": "这则著名格言的历史与变体"
      },
      {
        "title": "Windows 98 Crash During Live Demo",
        "url": "https://www.youtube.com/watch?v=yeUyxjLhAxU",
        "description": "比尔·盖茨在 Windows 98 发布会上著名的蓝屏死机视频"
      },
      {
        "title": "Defensive Programming",
        "url": "https://en.wikipedia.org/wiki/Defensive_programming",
        "description": "预测和处理错误的编程实践"
      },
      {
        "title": "CrowdStrike Channel File 291 RCA Exec Summary",
        "url": "https://www.crowdstrike.com/falcon-content-update-remediation-and-guidance-hub/",
        "description": "CrowdStrike 事故的根本原因分析——墨菲定律在大规模场景下的真实案例"
      }
    ]
  },
  {
    "title": "波斯特尔定律",
    "titleEn": "Postel's Law",
    "slug": "postels-law",
    "description": "在发送时要保守，在接收时要宽容。",
    "descriptionEn": "Be conservative in what you do, be liberal in what you accept from others.",
    "experience": "mid",
    "group": "Quality",
    "image": "/images/laws/postels-law.png",
    "overview": "波斯特尔定律（也称鲁棒性原则）指出：在发送数据时严格遵循规范，但在接收数据时宽容地处理不规范或非常规的输入。这一原则成就了互联网的韧性——不同的实现可以互相通信，因为每一方都力求兼容。在软件设计中，一个健壮的文件读取器可以打开不那么完美的文件，一个宽容的 XML 解析器可能从轻微错误中恢复。然而，过于宽容可能纵容草率的产出者泛滥，在安全上下文中接受畸形输入也可能存在风险。",
    "examples": "网页浏览器是波斯特尔定律的绝佳体现——网站上的 HTML 经常格式不规范，但浏览器仍会进行大量的错误纠正和宽容解析来渲染页面。如果浏览器严格对待，半数网页可能无法正常显示。在 API 设计中，如果你的服务接收到一个没有时区信息的时间戳，可以默认假设为 UTC 并尝试解析，而不是直接拒绝——这体现了接收时的宽容。但当你返回数据时，始终包含完整的时区信息，体现输出时的保守和精确。",
    "origins": "乔恩·波斯特尔（Jon Postel）在 1980 年的 TCP 规范（RFC 760）中写下了这一原则：「TCP 实现应当遵循一个通用的鲁棒性原则：在发送时要保守，在接收时要宽容。」这后来被称为波斯特尔定律或鲁棒性原则，深刻影响了许多互联网协议的设计。",
    "takeaways": [
      "当你的系统向外发送数据时，应严格遵循协议和标准——保守、精确。",
      "当接收数据时，在可能的情况下处理各种变体或轻微错误，不要因为细小的问题就拒绝通信。",
      "在现代，过度宽容的接收有时会掩盖错误，因此需要与安全性考量进行平衡。",
      "这一原则是互联网互操作性的基石——不同的实现能协同工作正是因为双向兼容。"
    ],
    "related": [
      "hyrums-law",
      "law-of-leaky-abstractions",
      "fallacies-of-distributed-computing"
    ],
    "further_reading": [
      {
        "title": "Robustness Principle - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Robustness_principle",
        "description": "关于波斯特尔定律及其应用的概述"
      },
      {
        "title": "RFC 760 - DoD Standard Internet Protocol",
        "url": "https://datatracker.ietf.org/doc/html/rfc760",
        "description": "乔恩·波斯特尔阐述这一原则的原始 RFC 760 规范"
      },
      {
        "title": "The Harmful Consequences of Postel's Maxim",
        "url": "https://datatracker.ietf.org/doc/html/draft-thomson-postel-was-wrong-00",
        "description": "对「过于宽容会造成问题」这一论点的批判性审视"
      },
      {
        "title": "The Robustness Principle Reconsidered",
        "url": "https://queue.acm.org/detail.cfm?id=1999945",
        "description": "埃里克·奥尔曼在 ACM Queue 上关于宽容接受对安全影响的文章"
      }
    ]
  },
  {
    "title": "破窗理论",
    "titleEn": "Broken Windows Theory",
    "slug": "broken-windows-theory",
    "description": "不要对「破窗」（糟糕的设计、错误的决策或低劣的代码）放任不管。",
    "descriptionEn": "Don't leave broken windows (bad designs, wrong decisions, or poor code) unrepaired.",
    "experience": "mid",
    "group": "Quality",
    "image": "/images/laws/broken-window-theory.png",
    "overview": "破窗理论源自犯罪学，由《程序员修炼之道》引入软件工程领域。在一座城市中，一扇破损的窗户如果不修复，就传递出无人关心的信号，从而招致更多的破坏行为。同样地，在代码中，一个明显的 bug 或一段凌乱的代码如果放任不管，就会导致更多开发人员绕过流程或引入更多混乱。质量问题如果置之不理就会滚雪球。如果一个团队经常忽略失败的测试或让 linter 错误悄悄溜过，开发人员会接收到这样的信息：提交粗制滥造的工作是可以接受的。相反，迅速修复小问题并保持高标准会营造出质量文化。",
    "examples": "一个代码库中有几处明显的拼接痕迹，例如带有 // TODO: fix this hack 注释但从未被修复的函数。如果新人看到这些，他们可能更倾向于添加自己的 hack——「反正这个项目到处是 hack」。或者，一个没有任何测试的模块（在测试覆盖率意义上是「破窗」），随着纪律的侵蚀，其他模块也可能开始失去测试。反之，在一个维护良好的项目中，维护者积极修复风格问题并简化代码，新贡献者很快就会学会匹配那种整洁性。",
    "origins": "破窗理论源自犯罪学——詹姆斯·Q·威尔逊（James Q. Wilson）和乔治·凯林（George Kelling）于 1982 年提出。在软件领域，安迪·亨特（Andy Hunt）和戴夫·托马斯（Dave Thomas）在《程序员修炼之道》（1999 年）中将其用作隐喻，主张及时修复小问题。杰夫·阿特伍德（Jeff Atwood）等人也在博客中讨论了这一原则。",
    "takeaways": [
      "如果你对小 bug 和不规范的风格视而不见，人们会认为质量无关紧要，从而提交更凌乱的代码。",
      "干净、维护良好的代码库会鼓励工程师保持整洁，而混乱的代码库则会鼓励走捷径和进一步恶化。",
      "在问题还小的时候修复它们——重构有害代码、更新过时文档，以防止代码健康的恶性循环。",
      "代码库的整体质量状态具有传染性——要么向上螺旋，要么向下螺旋。"
    ],
    "related": [
      "technical-debt",
      "boy-scout-rule",
      "galls-law"
    ],
    "further_reading": [
      {
        "title": "The Broken Window Theory - Coding Horror",
        "url": "https://blog.codinghorror.com/the-broken-window-theory/",
        "description": "杰夫·阿特伍德关于将这一理论应用于软件的讨论"
      },
      {
        "title": "Broken Windows Theory - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Broken_windows_theory",
        "description": "詹姆斯·Q·威尔逊和乔治·凯林的原始犯罪学理论"
      },
      {
        "title": "The Pragmatic Programmer",
        "url": "https://amzn.to/4qygIq6",
        "description": "将该概念在软件工程中推广开来的经典著作——安迪·亨特和戴夫·托马斯"
      },
      {
        "title": "Joy of Programming: The Broken Window Theory",
        "url": "https://opensourceforu.com/2011/05/joy-of-programming-broken-window-theory/",
        "description": "破窗理论在软件开发中的实际应用"
      }
    ]
  },
  {
    "title": "技术债务",
    "titleEn": "Technical Debt",
    "slug": "technical-debt",
    "description": "技术债务是所有拖慢我们开发软件速度的因素。",
    "descriptionEn": "Technical Debt is everything that slows us down when developing software.",
    "experience": "junior",
    "group": "Quality",
    "image": "/images/laws/technical-debt.png",
    "overview": "技术债务揭示了软件工程中的一个基本矛盾：速度与质量。当你编写粗糙的代码或推迟清理时，本质上是在借债：你获得了短期功能交付，但你引入的复杂性就是需要持续支付的利息。妥善管理技术债务意味着要清楚地意识到何时在添加快速补丁或临时 hack，并制定计划重新审视它。在得到管理的情况下，技术债务可以是一种有效的工具——你有意地承担一些混乱以获取反馈或赶上截止日期，然后再清理。但如果被忽视，债务就会累积到无法承受的地步。",
    "examples": "一个团队在截止日期的压力下，不编写测试就发布了一个新功能。发布成功（债务产生）。但之后进行变更变得更加困难，因为每次更改都面临不可预见的 bug 风险而没有测试的安全网（利息支付）。最终他们必须停止添加功能，通过补充缺失的测试和重构来偿还债务。另一个例子：一家初创公司用硬编码和复制粘贴代码快速交付原型以争取第一个客户（有意识地背负技术债务），成功赢得客户后，安排了一个修复冲刺来重构代码解决最棘手的问题。",
    "origins": "「技术债务」一词由沃德·坎宁安（Ward Cunningham，敏捷宣言的作者之一）在 1992 年的 OOPSLA 会议上提出。他在为一个金融应用工作时，首次使用这个金融隐喻向其老板解释为什么团队需要时间来重构代码。他将软件开发比作借款：取得捷径以更快地实现某个目标是可以明智的，前提是你在之后通过清理代码来偿还贷款。",
    "takeaways": [
      "当我们在代码中走捷径时，我们是在向未来借时间——这会带来短期收益，但欠下了需要修复的本金和持续产生的利息。",
      "如果技术债务不被偿还，混乱的代码、bug 和临时方案上花费的每一分钟都是债务的利息。",
      "并非所有技术债务本质上都是坏的——有时它是必要的，例如为了把握市场时机或进行原型验证。",
      "偿还技术债务的方法是重构代码、补充缺失的测试和改进设计。"
    ],
    "related": [
      "broken-windows-theory",
      "hofstadters-law",
      "boy-scout-rule"
    ],
    "further_reading": [
      {
        "title": "Debt Metaphor - Ward Cunningham",
        "url": "https://www.youtube.com/watch?v=pqeJFYwnkjE",
        "description": "沃德·坎宁安解释原始债务隐喻的视频（OOPSLA 1992）"
      },
      {
        "title": "Technical Debt - Martin Fowler",
        "url": "https://martinfowler.com/bliki/TechnicalDebt.html",
        "description": "马丁·福勒关于技术债务的全面博客文章"
      },
      {
        "title": "Technical Debt - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Technical_debt",
        "description": "关于该概念及其管理策略的概述"
      },
      {
        "title": "Accelerate",
        "url": "https://amzn.to/48Xugp3",
        "description": "福斯格伦、亨布尔和金关于技术债务如何影响软件交付的研究"
      }
    ]
  },
  {
    "title": "林纳斯定律",
    "titleEn": "Linus's Law",
    "slug": "linuss-law",
    "description": "只要有足够多的眼球审视，所有 bug 都是浅显的。",
    "descriptionEn": "Given enough eyeballs, all bugs are shallow.",
    "experience": "mid",
    "group": "Quality",
    "image": "/images/laws/linus-law.png",
    "overview": "林纳斯定律由埃里克·S·雷蒙德（Eric S. Raymond）提出，以 Linux 创始人林纳斯·托瓦兹（Linus Torvalds）命名。它捕捉了开源开发的核心优势：当足够多的人审查和使用代码时，bug 会迅速被发现和修复。对你来说是令人困惑的 bug，对另一位程序员来说可能显而易见。这一定律强调了透明和协作如何带来更健壮、更可靠的软件。当然，这并非绝对——协调和质量控制仍然是必要的——但作为指导原则，它捕捉了大型开发生态系统的自我修正特性。「许多眼球」原则也是为什么内部代码审查和结对编程能够有效的原因。",
    "examples": "以 Apache HTTP Server 为例，这是一个被数百万人使用的开源 Web 服务器。由于其代码开放且用户基数庞大，许多开发者在某个时刻都曾调试或改进过它。如果存在安全漏洞或 bug，全球社区中某人发现并报告它的概率非常高。Log4j 中臭名昭著的 Log4Shell 漏洞就是由社区发现并修复的。相比之下，一个只有少数客户的专有企业软件，如果出现微妙的 bug，由于「眼球」有限，它可能需要很长时间才能浮现并被调试。",
    "origins": "埃里克·S·雷蒙德（Eric S. Raymond）在 1997 年首次发表的《大教堂与集市》中提出了这一定律，并于 1999 年出版成书。雷蒙德写道：「只要有足够多的眼球审视，所有 bug 都是浅显的」，并将其命名为林纳斯定律，以向托瓦兹的开放开发方法致敬。",
    "takeaways": [
      "林纳斯定律强调了同行评审和社区在软件开发中的力量——如果代码对众多开发人员开放，总有人拥有识别和修复某个 bug 的专业知识。",
      "这常被引用为开源软件的关键优势：当源代码广泛可用时，就能积累庞大的贡献者群体。",
      "林纳斯定律的前提是有活跃的社区在真正审视——仅仅开放源代码并不会神奇地修复 bug。",
      "该定律也支持代码审查、结对编程等内部实践——增加审视代码的眼球数量。"
    ],
    "related": [
      "brooks-law",
      "sturgeons-law",
      "bus-factor"
    ],
    "further_reading": [
      {
        "title": "The Cathedral and the Bazaar",
        "url": "https://amzn.to/49cYD9Y",
        "description": "埃里克·S·雷蒙德关于开源开发的著名论文"
      },
      {
        "title": "Linus's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Linus%27s_law",
        "description": "该定律及其影响的概述"
      },
      {
        "title": "With Enough Eyeballs, All Bugs Are Shallow - TechCrunch",
        "url": "https://techcrunch.com/2012/02/23/with-many-eyeballs-all-bugs-are-shallow/",
        "description": "在真实世界漏洞背景下对该定律的分析"
      },
      {
        "title": "Revisiting Linus's Law: Benefits and Challenges of OSS Peer Review",
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S1071581915000087",
        "description": "关于开源同行评审中成员差异影响的学术研究"
      },
      {
        "title": "An Empirical Study of Build Maintenance Effort - IEEE",
        "url": "https://www.computer.org/csdl/magazine/mi/2012/01/mmi2012010072/13rRUzphDuy",
        "description": "IEEE 关于软件维护与多眼假说的实证研究"
      },
      {
        "title": "Timeline of the xz open source attack",
        "url": "https://research.swtch.com/xz-timeline",
        "description": "拉斯·考克斯关于 xz 后门事件的详细时间线——对「多眼假说」的警示性反例"
      }
    ]
  },
  {
    "title": "克尼汉定律",
    "titleEn": "Kernighan's Law",
    "slug": "kernighans-law",
    "description": "调试代码的难度是编写代码的两倍。",
    "descriptionEn": "Debugging is twice as hard as writing the code in the first place.",
    "experience": "junior",
    "group": "Quality",
    "image": "/images/laws/kernighan-law.png",
    "overview": "布莱恩·克尼汉（Brian Kernighan）指出，调试需要理解代码实际做了什么，其难度可能是编写代码时的两倍。在编写代码时，你带着特定的心智模型和完整的上下文来操作。而在调试时，你可能面对的是别人的代码，或是你自己的代码但在上下文已经淡忘之后。因此，编写过于巧妙的代码本质上是为未来的自己设置陷阱。如果你把代码写得过于取巧，你实际上是在骗未来的自己——一个更易于维护的版本通常优于一个难以理解但经过优化的版本。",
    "examples": "一位开发者用一种紧凑的风格编写函数，将多个操作串联在一行中。取巧的版本可能花了 30 分钟写出来，但调试花了 3 个小时。如果当初将代码写得更清晰，编写可能需要 45 分钟，但之后的调试只需要 30 分钟。总时间投入：取巧方案 3.5 小时 vs 清晰方案 1.25 小时——即使编写时多花了一些时间，净收益也是巨大的。",
    "origins": "布莱恩·克尼汉（Brian Kernighan）在 1974 年的《编程风格要素》（与 P.J. 普劳格合著，1978 年第二版）中表达了这一思想。克尼汉因与丹尼斯·里奇（Dennis Ritchie）合著《C 程序设计语言》而闻名，他在那个计算资源受限的时代就已经倡导简洁性和可读性优先。",
    "takeaways": [
      "Bug 的发现和修复比编写代码本身更复杂，因为调试需要同时理解代码的行为以及它为何不按预期工作。",
      "如果你以自己智力极限的水准编写代码，你将无法在以后理解或排查它。",
      "结构良好且文档清晰的简洁代码更容易调试，从长远来看节省时间。",
      "即使你的代码在编写时运行成功，如果过于复杂，它就是脆弱的。"
    ],
    "related": [
      "kiss-principle",
      "premature-optimization"
    ],
    "further_reading": [
      {
        "title": "The C Programming Language",
        "url": "https://amzn.to/3YLSFYy",
        "description": "布莱恩·克尼汉与丹尼斯·里奇合著的经典「C 语言圣经」"
      },
      {
        "title": "The Elements of Programming Style",
        "url": "https://www.amazon.com/Elements-Programming-Style-2nd/dp/0070342075",
        "description": "克尼汉与普劳格关于编写清晰代码的指南"
      },
      {
        "title": "Code Complete",
        "url": "https://amzn.to/4smkSmE",
        "description": "史蒂夫·麦康奈尔关于软件构建的全面指南"
      }
    ]
  },
  {
    "title": "测试金字塔",
    "titleEn": "Testing Pyramid",
    "slug": "testing-pyramid",
    "description": "一个项目应当有大量快速的单元测试，较少的集成测试，以及极少量的 UI 测试。",
    "descriptionEn": "A project should have many fast unit tests, fewer integration tests, and only a small number of UI tests.",
    "experience": "junior",
    "group": "Quality",
    "image": "/images/laws/testing-pyramid.png",
    "overview": "测试金字塔是一个视觉隐喻：最庞大的层级（底部）是单元测试，它们运行最快且数量最多。中间层是集成测试，数量较少。顶部是 UI/端到端测试，数量最少。越往上，测试在时间、精力和脆弱性方面就越昂贵，因此你应当让它们的数量相应减少。遵循金字塔模型，大多数 bug 会在最廉价的层级被捕获。如果金字塔倒置（大量端到端测试，很少的单元测试），测试套件往往是缓慢且脆弱的，开发人员获得反馈的延迟也会很长。",
    "examples": "一个电商 Web 应用遵循测试金字塔：团队为价格计算、折扣逻辑和验证函数编写大量单元测试（数百个）。他们还编写 API 集成测试验证订单创建是否正确连接了库存、支付和通知服务（数十个）。最后，有几个端到端测试模拟完整用户旅程（浏览、加入购物车、结账）。由于单元测试数量众多，业务逻辑问题会在端到端测试运行之前就被发现。CI 中耗时很少，支持自信部署。反之，如果一个团队单元测试很少而依赖 50 个端到端 GUI 测试每晚运行数小时——测试失败时很难判断是真正的 bug 还是测试的不稳定性。",
    "origins": "迈克·科恩（Mike Cohn）因推广测试金字塔而闻名。他在著作《Succeeding with Agile》和 2009 年左右的博文中描述了这个概念，创造了术语和概念。该思想建立在更早期的测试理论之上（如 ISTQB 基础中的测试层级，或 TDD 中编写大量单元测试的通用实践）。",
    "takeaways": [
      "单元测试是基础——它们作为独立函数运行，执行速度很快，可以承担大量编写成本。",
      "集成测试验证模块之间的协作——你需要比单元测试更少的集成测试。",
      "端到端测试模拟真实用户场景——必不可少但运行缓慢且维护成本高。",
      "以金字塔方式组织测试能获得快速反馈（大多数测试是快速的单元测试），UI 测试失败时更有可能是由真正的问题引起的。"
    ],
    "related": [
      "lehmans-laws"
    ],
    "further_reading": [
      {
        "title": "The Practical Test Pyramid",
        "url": "https://martinfowler.com/articles/practical-test-pyramid.html",
        "description": "马丁·福勒关于测试金字塔的全面指南"
      },
      {
        "title": "Succeeding with Agile",
        "url": "https://amzn.to/4pb7Q8v",
        "description": "迈克·科恩推广测试金字塔概念的著作"
      },
      {
        "title": "Test Pyramid - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Test_automation#Testing_at_different_levels",
        "description": "关于不同层级测试自动化的概述"
      },
      {
        "title": "Software Engineering at Google, Chapter 11: Testing Overview",
        "url": "https://abseil.io/resources/swe-book/html/ch11.html",
        "description": "《Google 软件工程》第 11 章——关于 Google 测试哲学与实践"
      }
    ]
  },
  {
    "title": "杀虫剂悖论",
    "titleEn": "Pesticide Paradox",
    "slug": "pesticide-paradox",
    "description": "反复运行相同的测试会随着时间的推移变得越来越低效。",
    "descriptionEn": "Repeatedly running the same tests becomes less effective over time.",
    "experience": "mid",
    "group": "Quality",
    "image": "/images/laws/pesticide-paradox.png",
    "overview": "杀虫剂悖论的类比来自农业——当同一种杀虫剂被反复使用时，害虫会产生抗药性。在软件测试中，新测试套件的首次运行可能会发现许多 bug。这些 bug 被修复后，如果你不断运行相同的测试而不做更改，你就不会再在其中发现新 bug——软件已经对这些特定测试产生了「免疫力」。测试过程不能停滞不前：测试用例必须定期维护和更新。在每次发布周期之后，应评估哪些 bug 逃逸到了生产环境并相应增强测试套件。这个悖论也为探索性测试提供了理由——在每个迭代中以新的方式探索应用，揭示静态回归套件无法发现的问题。",
    "examples": "一个移动应用在第一个版本中，测试人员为登录和用户资料功能编写了大量测试，发现并修复了十个 bug。在后续版本中，这些测试用例全部通过（登录和资料方面没有新 bug）。与此同时，应用新增了聊天功能，但测试套件没有为它增加太多用例。几个版本之后，用户开始抱怨聊天功能崩溃——测试套件未能发现这些问题，因为它没有更新以覆盖聊天功能。团队增加了聊天功能的测试之后，开始能在发布前发现这些问题。这个过程持续进行——这就是杀虫剂悖论在实践中的体现。",
    "origins": "这一概念由软件测试专家鲍里斯·贝泽尔（Boris Beizer）博士提出，并在 ISTQB（国际软件测试资质认证委员会）的资料中作为测试七大原则之一广为人知。贝泽尔表述了如下意思：每种测试方法都会产生杀虫剂悖论，bug 会对测试产生适应性，留下更隐蔽的 bug。",
    "takeaways": [
      "随着时间的推移，过时的测试套件会发现越来越少的 bug——这些测试仍然有用但不再能有效检测新缺陷。",
      "持续注入新测试数据和创建新测试用例对于保持测试有效性至关重要。",
      "通过定期创建新测试或修改现有测试，可以有效地「更换杀虫剂」来捕获新 bug。",
      "旧测试可以捕获回归 bug，但要捕获新 bug，你必须设计新测试。"
    ],
    "related": [
      "lehmans-laws",
      "testing-pyramid"
    ],
    "further_reading": [
      {
        "title": "Software Testing Techniques",
        "url": "https://amzn.to/3Yg3jH4",
        "description": "鲍里斯·贝泽尔关于测试技术的综合著作"
      },
      {
        "title": "ISTQB Foundation Level Syllabus",
        "url": "https://www.istqb.org/certifications/certified-tester-foundation-level",
        "description": "ISTQB 官方大纲中涵盖的测试七大原则"
      },
      {
        "title": "Lessons Learned in Software Testing",
        "url": "https://amzn.to/3YNqIzD",
        "description": "卡纳、巴赫和佩蒂科德关于软件测试的实用智慧"
      }
    ]
  },
  {
    "title": "莱曼软件演化定律",
    "titleEn": "Lehman's Laws of Software Evolution",
    "slug": "lehmans-laws",
    "description": "反映现实世界的软件必须不断演化，并且这种演化具有可预测的极限。",
    "descriptionEn": "Software that reflects the real world must evolve, and that evolution has predictable limits.",
    "experience": "senior",
    "group": "Quality",
    "image": "/images/laws/lehman-laws.png",
    "overview": "莱曼定律描述了在现实世界中运行的长期软件系统所面临的不可避免的现实。这类系统——业务软件、操作系统和平台——必须持续变化才能保持有用，这种变化既不是可选的也不是免费的。随着软件演化，复杂性不断积累，每次更改都会略微增加内部混乱程度，除非专门投入精力加以抑制。组织面临硬性限制：知识、协调和熟悉度约束着单次发布能吸收多少变更——增加人员并不能消除这些限制。莱曼的洞见是：成功软件永远不会真正「完成」，要持续满足新需求就必须持续增强。",
    "examples": "一个 2000 年部署的大型企业 ERP 系统，25 年来经历了业务规则更新、新技术集成和 UI 改版。根据莱曼定律，如果他们停止更新，系统将不再满足业务需求。公司观察到 2025 年添加功能所需时间比 2005 年更长——这正是复杂性累积和熟悉度约束的体现。Linux 内核是另一个例子：它经历了持续变化不断适应新硬件和需求，功能大幅增长，复杂性也随之增加，需要子系统维护者来管理。",
    "origins": "莱曼的早期定律于 1974 年形成，基于他对 IBM OS/360 等各种软件的研究。莱曼和贝拉迪（Lehman and Belady）通过观察版本历史和增长指标得出了最初的三条定律。随着时间的推移，莱曼在 20 世纪 80 年代和 90 年代不断完善这些定律——从 1974 年的 3 条增加到 5 条，最终在 20 世纪 90 年代达到 8 条。",
    "takeaways": [
      "如果系统不持续更新以满足新需求，其使用满意度会降低——成功的软件永远不会真正「完成」。",
      "随着时间的推移，变更不断积累使系统变得更复杂——除非开发者投入精力进行重构，否则内部复杂性将持续增加。",
      "组织在给定时间内只能做有限的事情——团队知识和流程开销等因素构成了硬性限制。",
      "系统的感知质量会下降，可能由于用户期望上升、环境变化或小问题的积累。"
    ],
    "related": [
      "brooks-law",
      "conways-law",
      "technical-debt"
    ],
    "further_reading": [
      {
        "title": "Programs, Life Cycles, and Laws of Software Evolution",
        "url": "https://ieeexplore.ieee.org/document/1456074",
        "description": "莱曼和贝拉迪 1980 年关于软件演化的原始论文"
      },
      {
        "title": "Laws of Software Evolution - The Nineties View",
        "url": "https://ieeexplore.ieee.org/document/637156",
        "description": "莱曼等人 1997 年关于这些定律的更新及额外研究"
      },
      {
        "title": "The Evolution of the Laws of Software Evolution",
        "url": "https://link.springer.com/chapter/10.1007/978-3-540-75381-0_1",
        "description": "关于莱曼定律如何随时间演化的概述"
      }
    ]
  },
  {
    "title": "斯特金定律",
    "titleEn": "Sturgeon's Law",
    "slug": "sturgeons-law",
    "description": "万事万物，其中 90% 都是糟粕。",
    "descriptionEn": "90% of everything is crap.",
    "experience": "junior",
    "group": "Quality",
    "image": "/images/laws/sturgeon-law.png",
    "overview": "西奥多·斯特金（Theodore Sturgeon）以回应「90% 的科幻小说都是垃圾」的批评而闻名——他的回应是「90% 的一切都是垃圾」。在技术领域，这意味着大多数代码或功能是不必要的，也许 90% 的实验或功能都未能成功，只有 10% 真正创造价值。这支持了「更少的代码是更高质量的」假设，并与 10 倍工程师的概念相呼应——10 倍工程师不是写 10 倍代码的人，而是能识别出能带来 10 倍价值的那 10% 工作的人。风险不在于那 90% 的低质量，而在于假装它不是低质量。",
    "examples": "一个应用有 100 个功能，用户分析显示用户大量使用其中 10 个，其余的几乎不用——这正是斯特金定律所预测的。一个组织每个季度有很多项目想法要开发，大多数不会有任何成果，但少数几个可能是改变游戏规则的。在代码审查领域，大量代码既不优雅也不必要。认识到斯特金定律意味着持续精炼，假设存在大量「噪音」，专注于找到「信号」。",
    "origins": "西奥多·斯特金（Theodore Sturgeon）是一位科幻小说作家，在 1957 年创造了这个说法。它最初以「斯特金的启示」（Sturgeon's Revelation）发表在 1957 年的《Venture》杂志上。",
    "takeaways": [
      "这像是帕累托原则（80/20 规则）的极端形式——大部分产出的东西就是不好，好的东西是例外。",
      "在软件中，通常有很多功能或代码路径增加的价值非常少，关键挑战是找到最大化高影响力那 10% 的方法。",
      "大多数新概念或技术未能兑现承诺，而真正出色的那些则会脱颖而出。",
      "不是所有代码都值得保留——频繁反思和精简代码库是健康的实践。"
    ],
    "related": [
      "goodharts-law",
      "galls-law"
    ],
    "further_reading": [
      {
        "title": "Sturgeon's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Sturgeon%27s_law",
        "description": "该定律及其起源的概述"
      },
      {
        "title": "Over 50% of plugins in the WordPress repository haven't been updated in 2+ years",
        "url": "https://www.reddit.com/r/Wordpress/comments/1n0lnas/over_50_of_plugins_in_the_wordpress_repository/",
        "description": "Reddit 上关于 WordPress 插件生态系统中斯特金定律的讨论"
      }
    ]
  },
  {
    "title": "阿姆达尔定律",
    "titleEn": "Amdahl's Law",
    "slug": "amdahls-law",
    "description": "通过并行化获得的加速受限于无法并行化的工作部分。",
    "descriptionEn": "The speedup from parallelization is limited by the fraction of work that cannot be parallelized.",
    "experience": "senior",
    "group": "Scale",
    "image": "/images/laws/amdahl-law.png",
    "overview": "吉恩·阿姆达尔（Gene Amdahl）在 1967 年提出了这一定律：当你增加 CPU 核心时，只有代码中可并行化的部分会加速，串行部分保持不变，最终主导总执行时间。如果 s 是串行比例，在无限并行资源下的最大加速比是 1/s。因此如果 10% 是串行的，最大加速比是 10 倍；如果 50% 是串行的，最大加速比只有 2 倍。这适用于硬件之外的领域：如果你的系统有一个无法并行化的瓶颈（如单个数据库实例或一个人做所有决策），增加资源就会碰壁。",
    "examples": "如果所有请求都命中单个数据库实例，增加应用服务器就没有帮助——数据库成为瓶颈。如果所有请求最终都串行经过一个共享依赖（如认证或计费服务），将单体拆分为微服务也不会改善性能。在组织中，如果一个人或委员会负责所有架构决策，增加工程师会增加协调成本而不会提高吞吐量。",
    "origins": "吉恩·阿姆达尔（Gene Amdahl），一位以 IBM 大型机工作闻名的计算机架构师，于 1967 年在 AFIPS 春季联合计算机会议上引入了该定律。它最初围绕处理器性能提出，但后来被证明普遍适用于系统和组织。",
    "takeaways": [
      "串行工作设定了上限——没有任何数量的并行化可以克服它。",
      "扩展会暴露瓶颈——更多资源让限制变得可见，而不是让限制消失。",
      "在扩展之前先修复：先减少串行路径，并行化是第二步。",
      "这同样适用于人——决策瓶颈可以在团队规模上占据主导地位。"
    ],
    "related": [
      "gustafsons-law",
      "metcalfes-law"
    ],
    "further_reading": [
      {
        "title": "Validity of the Single Processor Approach to Achieving Large Scale Computing Capabilities",
        "url": "https://dl.acm.org/doi/10.1145/1465482.1465560",
        "description": "吉恩·阿姆达尔 1967 年的原始论文"
      },
      {
        "title": "Amdahl's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Amdahl%27s_law",
        "description": "带有可视化示例的定律概述"
      },
      {
        "title": "The Mythical Man-Month",
        "url": "https://amzn.to/3MUjDL7",
        "description": "弗雷德·布鲁克斯关于软件工程和扩展的经典著作"
      }
    ]
  },
  {
    "title": "古斯塔夫森定律",
    "titleEn": "Gustafson's Law",
    "slug": "gustafsons-law",
    "description": "通过增加问题规模，可以在并行处理中实现显著的加速。",
    "descriptionEn": "It is possible to achieve significant speedup in parallel processing by increasing the problem size.",
    "experience": "senior",
    "group": "Scale",
    "image": "/images/laws/gustafson-law.png",
    "overview": "古斯塔夫森定律是并行计算中的一个原则，提供了关于可扩展性的乐观视角。阿姆达尔定律假设问题规模固定，得出了加速受限的悲观结论；古斯塔夫森定律则改变了视角——当有更多处理器可用时，开发者倾向于增加问题规模来利用额外计算能力。如果你有一个能力翻倍的集群，你可能在相同时间内处理两倍的数据。工作的并行部分随 N 个处理器增长，而串行部分保持大致相同，从而产生可以接近线性的「比例加速」。古斯塔夫森的洞见是：开发者自然会通过提出更大的问题来利用更多的计算能力。",
    "examples": "在高性能计算中，气候建模在有更多处理器可用时通常会增加模型分辨率——1000 个 CPU 上的天气模拟不会只是快 1000 倍，而是在相同时间内运行一个更精细得多的全球模型得到更好的预报。在大数据处理中，如果一台机器分析 100 万条记录需要一小时，一个 10 台机器的集群可以在一小时内分析 1000 万条记录。MapReduce 和 Spark 等现代分布式系统鼓励随着节点增加将数据集拆分成更多分区，保持所有处理器忙碌。",
    "origins": "古斯塔夫森定律由计算机科学家约翰·L·古斯塔夫森（John L. Gustafson）与埃德温·巴尔西斯（Edwin Barsis）于 1988 年在题为《重新评估阿姆达尔定律》的论文中提出。当时阿姆达尔 1967 年的结果使大规模并行超级计算机备受质疑，古斯塔夫森观察到这只在工作负载保持不变时成立，通过增加问题规模可以达到接近线性的加速。",
    "takeaways": [
      "随着计算资源的增长，你可以在给定时间内计算更多的问题，而不是更快地解决相同的问题。",
      "它与阿姆达尔定律相对立——通过假设问题规模与计算能力成比例增长来保持并行处理器忙碌。",
      "软件和算法应该被设计为「向外扩展」——随着可用处理器或机器的增加，可完成的工作量可以相应增加。",
      "这解释了为什么许多大数据和科学计算应用能够有效利用大规模集群。"
    ],
    "related": [
      "amdahls-law",
      "metcalfes-law"
    ],
    "further_reading": [
      {
        "title": "Reevaluating Amdahl's Law",
        "url": "https://dl.acm.org/doi/10.1145/42411.42415",
        "description": "约翰·L·古斯塔夫森 1988 年的原始论文"
      },
      {
        "title": "Gustafson's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Gustafson%27s_law",
        "description": "该定律及其与阿姆达尔定律关系的概述"
      }
    ]
  },
  {
    "title": "梅特卡夫定律",
    "titleEn": "Metcalfe's Law",
    "slug": "metcalfes-law",
    "description": "网络的价值与用户数量的平方成正比。",
    "descriptionEn": "The value of a network is proportional to the square of the number of users.",
    "experience": "senior",
    "group": "Scale",
    "image": "/images/laws/metcalfe-law.png",
    "overview": "梅特卡夫定律是关于通信网络的观察，已被推广到许多技术生态系统。它指出网络的价值与连接用户数量的平方成正比——5 个节点最多可能有 10 对连接，12 个节点则有 66 对。网络效应自我加强，是一种强者愈强的现象。最初增加一个用户可能不会改变什么，但后来增加第 1000 万个用户可能会带来数百万次新的互动，在技术领域创造了赢家通吃的动态。然而这是个简化模型——并非每个用户都与每个其他用户连接，增量价值可能会递减。",
    "examples": "在社交媒体中，早期 Facebook 如果只有少数朋友是成员其效用很低，但随着每个人都加入它变得极其有价值。WhatsApp 或微信也是如此——每个新用户都可以与许多其他人开启聊天。梅特卡夫定律也可以反向作用：如果用户开始离开一个社交网络，价值的下降比线性更快，每次离开都减少所有留下者的潜在连接，造成「死亡螺旋」。",
    "origins": "梅特卡夫定律以罗伯特·梅特卡夫（Robert Metcalfe）命名，他在 1980 年左右讨论以太网和网络采用时提出了这一概念。1983 年他向 3Com 公司展示了这一理念，论证网络价值随兼容通信设备数量的平方增长。「梅特卡夫定律」一词在 1993 年乔治·吉尔德（George Gilder）在《福布斯》杂志的文章中被普及。",
    "takeaways": [
      "将用户数量翻倍，潜在的连接大约增加四倍。",
      "每个新用户通过创造新的互动机会为现有用户增加价值——产品随着用户基础的增长而指数级更有用。",
      "该定律有助于解释为什么社交媒体和消息平台在达到临界点后价值可以爆发式增长。",
      "网络效应的负面影响是锁定和退出壁垒——离开一个大型网络平台的成本随着其规模增长。"
    ],
    "related": [
      "amdahls-law",
      "gustafsons-law"
    ],
    "further_reading": [
      {
        "title": "Metcalfe's Law: more misunderstood than wrong?",
        "url": "https://blog.simeonov.com/2006/07/26/metcalfes-law-more-misunderstood-than-wrong/",
        "description": "该定律的应用和局限性分析"
      },
      {
        "title": "Metcalfe's Law - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Metcalfe%27s_law",
        "description": "该定律及其历史概述"
      },
      {
        "title": "Metcalfe's Law and Legacy",
        "url": "https://www.discovery.org/a/41/",
        "description": "乔治·吉尔德在《福布斯》ASAP 上的原始文章"
      },
      {
        "title": "Tencent and Facebook Data Validate Metcalfe's Law",
        "url": "https://doi.org/10.1007/s11390-015-1518-1",
        "description": "使用真实社交网络数据对梅特卡夫定律的实证验证"
      }
    ]
  },
  {
    "title": "DRY（不要重复自己）",
    "titleEn": "DRY (Don't Repeat Yourself)",
    "slug": "dry-principle",
    "description": "每一份知识都必须在系统中拥有单一、明确、权威的表示。",
    "descriptionEn": "Every piece of knowledge must have a single, unambiguous, authoritative representation.",
    "experience": "junior",
    "group": "Design",
    "image": "/images/laws/dry.png",
    "overview": "DRY 由安迪·亨特（Andy Hunt）和戴夫·托马斯（Dave Thomas）在《程序员修炼之道》中提出。其核心思想很简单：系统中的每个事实或逻辑片段应该只表达一次。如果你在多个模块中发现相同的代码、公式或规则，就违反了 DRY 原则。这种重复造成了隐藏的维护成本——当业务规则变化时，你必须找到每一个重复的实例分别修改。DRY 同样适用于数据库模式、测试和文档。但要注意：DRY 是关于重复的意图，而不仅仅是看起来相似的代码——两段代码可以看起来完全相同但在应用中服务于不同的目的。",
    "examples": "一个应用在五个不同的源文件中都有数据库连接 URL——如果数据库主机变更，必须编辑所有五个地方。DRY 的做法是将该 URL 保存在一个所有模块都可以读取的配置变量中。如果应用的两个部分都以相同的方式格式化日期，应该创建一个单一的 formatDate() 工具函数并从两个地方调用它——现在如果日期格式需要改变，只需修改这一个函数。在大型代码库中，如果多个应用需要相同的安全逻辑，应该创建共享库而不是复制代码。",
    "origins": "「DRY」一词由安迪·亨特（Andy Hunt）和戴夫·托马斯（Dave Thomas）于 1999 年在其著作《程序员修炼之道》中创造。他们将其定义为：「每一份知识都必须在系统中拥有单一、明确、权威的表示。」更早之前，避免代码重复是结构化编程和 Unix 哲学的一部分，在极限编程中被称为「一次且仅一次」。",
    "takeaways": [
      "DRY 原则是关于避免代码中知识的重复——如果同样的思想或逻辑出现在多个地方，这就是重构的信号。",
      "当需求变更时，你应该只在一个地方更新逻辑——重复的代码增加不一致性和 bug 的风险。",
      "谨慎应用 DRY：它是关于知识的重复而不仅仅是表面重复——有时两段代码看起来相似但做不同的事情，强行合并可能会过度复杂化。",
      "DRY 适用于所有知识制品：代码、文档、配置和数据库模式。"
    ],
    "related": [
      "solid-principles",
      "law-of-demeter"
    ],
    "further_reading": [
      {
        "title": "The Pragmatic Programmer, 20th Anniversary Edition",
        "url": "https://amzn.to/4piJutH",
        "description": "亨特和托马斯关于 DRY 原则的原始来源——《程序员修炼之道》"
      },
      {
        "title": "DRY - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",
        "description": "该原则及相关概念概述"
      },
      {
        "title": "Code Complete",
        "url": "https://amzn.to/3N57T8t",
        "description": "史蒂夫·麦康奈尔关于代码重复和抽象的指南"
      }
    ]
  },
  {
    "title": "KISS（保持简单）",
    "titleEn": "KISS (Keep It Simple, Stupid)",
    "slug": "kiss-principle",
    "description": "设计和系统应该尽可能简单。",
    "descriptionEn": "Designs and systems should be as simple as possible.",
    "experience": "junior",
    "group": "Design",
    "image": "/images/laws/kiss.png",
    "overview": "KISS 原则是一个强有力的提醒：简单性应该是一个关键目标。如果你可以用一个 50 行的脚本解决一个问题，而不是一个复杂的 500 行解决方案，KISS 倾向于 50 行的解决方案——因为每一行代码都有可能引发错误。简单的设计更容易维护：新团队成员可以更快上手，bug 更容易定位，修改引起的连锁反应更少。KISS 鼓励开发者抵制一次性做太多事情的「聪明」代码，并避免设计那些以当前复杂性为代价来解决假设性未来问题的架构。",
    "examples": "一个 Web 应用需要生成报表。KISS 的做法是使用简单的脚本或现有库查询数据库并输出 CSV。非 KISS 的做法是设计一个完整的插件架构「以防万一」以后需要更通用的方式——如果需求很小，后者就是过度设计。当编写一个解析文件的函数时，KISS 实现使用简单的逐行读取逻辑；复杂的做法可能是实现一个完全通用的解析器组合框架。许多有经验的工程师建议：「先让它工作，再让它正确，然后（如果需要的话）让它快速。」",
    "origins": "「保持简单，笨蛋」（Keep It Simple, Stupid）这个短语来自美国军方，归属于凯利·约翰逊（Kelly Johnson）——洛克希德臭鼬工厂在 20 世纪 60 年代的首席工程师。约翰逊挑战他的团队：设计一种能够由战场上的普通机械师使用基本工具进行维修的飞机。C.A.R. 霍尔（C.A.R. Hoare）曾说：「构建软件设计有两种方式：一种是使其如此简单以至于显然没有缺陷，另一种是使其如此复杂以至于没有明显的缺陷。第一种方法要困难得多。」",
    "takeaways": [
      "KISS 主要指在解决方案设计中避免复杂性——满足需求且设计简单的解决方案优于复杂的解决方案。",
      "写得简单的代码更容易、更快地理解和调试——即使是你未来的自己也会更容易理解和修复。",
      "聪明的代码初看可能令人印象深刻，但它往往掩盖了问题——任何不必要增加复杂性的东西都违背了 KISS 原则。",
      "简单性是真正的工程美德——达到简单通常比制造复杂需要更多的思考和技巧。"
    ],
    "related": [
      "yagni",
      "principle-of-least-astonishment",
      "galls-law"
    ],
    "further_reading": [
      {
        "title": "A Philosophy of Software Design",
        "url": "https://amzn.to/3N1uR0f",
        "description": "约翰·奥斯瑟特关于管理软件复杂性的书"
      },
      {
        "title": "KISS Principle - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/KISS_principle",
        "description": "该原则及其起源概述"
      },
      {
        "title": "Code Complete",
        "url": "https://amzn.to/3N57T8t",
        "description": "史蒂夫·麦康奈尔强调代码简单性的实用手册"
      }
    ]
  },
  {
    "title": "SOLID 原则",
    "titleEn": "SOLID Principles",
    "slug": "solid-principles",
    "description": "增强软件设计的五条主要指导原则，使代码更具可维护性和可扩展性。",
    "descriptionEn": "Five main guidelines that enhance software design, making code more maintainable and scalable.",
    "experience": "mid",
    "group": "Design",
    "image": "/images/laws/solid.png",
    "overview": "SOLID 是面向对象设计的五条高层指导原则的首字母缩写：单一职责（一个类只关注一件事）、开闭原则（对扩展开放，对修改封闭）、里氏替换（子类必须可替换其父类）、接口隔离（不强制依赖未使用的接口）和依赖反转（依赖抽象而非具体实现）。当这些原则一起应用时，产生的系统是模块化的、可扩展的，并且在变更下具有鲁棒性——代码变得更容易测试、重构和扩展而不会破坏现有功能。",
    "examples": "对于单一职责原则：一个管理用户账户的 Web 应用，违反 SRP 的设计可能有一个单一的 UserManager 类处理验证、数据库操作、发送邮件和日志；更好的设计将这些分离为 UserValidator、UserRepository、EmailService 和一个 UserRegistrationService 来协调。对于依赖反转原则：一个发送告警的 NotificationService，没有 DIP 时直接使用 EmailSender，有了 DIP 则定义 INotificationChannel 接口——使添加新渠道或替换测试替身变得容易。",
    "origins": "五条 SOLID 原则经过多年发展，由罗伯特·C·马丁（Robert C. Martin，鲍勃大叔）收集并推广。首字母缩写 SOLID 由迈克尔·费瑟斯（Michael Feathers）在 2004 年左右创造。这些原则借鉴了更早的思想家：OCP 来自伯特兰·迈耶（Bertrand Meyer，1988 年），LSP 来自芭芭拉·利斯科夫（Barbara Liskov，1987 年），ISP 来自施乐帕克研究中心的工作，而 DIP 和 SRP 是马丁受分层和内聚实践启发提出的。",
    "takeaways": [
      "遵循 SOLID 能产生更容易扩展、测试和重构而不会破坏现有功能的软件。",
      "一个具有单一职责、依赖良好定义的接口、正确使用继承和多态进行扩展的类，很可能容易维护。",
      "系统某一部分的变更不会级联影响到其他地方，因为代码是松耦合且封装良好的。",
      "SOLID 不保证完美的设计，但它为面向对象编程提供了经过验证的指导原则。"
    ],
    "related": [
      "law-of-demeter",
      "hyrums-law",
      "law-of-leaky-abstractions",
      "dry-principle",
      "kiss-principle",
      "yagni"
    ],
    "further_reading": [
      {
        "title": "Design Principles and Design Patterns",
        "url": "https://web.archive.org/web/20150906155800/http://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf",
        "description": "罗伯特·C·马丁关于面向对象设计原则的基础论文"
      },
      {
        "title": "Agile Software Development: Principles, Patterns, and Practices",
        "url": "https://amzn.to/497oH7H",
        "description": "鲍勃大叔介绍 SOLID 原则的综合书籍"
      },
      {
        "title": "Clean Architecture",
        "url": "https://amzn.to/4jeeN7k",
        "description": "罗伯特·C·马丁关于软件架构和设计的指南"
      },
      {
        "title": "SOLID - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/SOLID",
        "description": "五条原则的概述及示例"
      },
      {
        "title": "Design Patterns: Elements of Reusable Object-Oriented Software",
        "url": "https://amzn.to/3LnM5o6",
        "description": "四人帮关于面向对象模式的经典著作——与 SOLID 相辅相成"
      }
    ]
  },
  {
    "title": "迪米特法则",
    "titleEn": "Law of Demeter",
    "slug": "law-of-demeter",
    "description": "一个对象只应与它的直接朋友交互，而不是陌生人。",
    "descriptionEn": "An object should only interact with its immediate friends, not strangers.",
    "experience": "mid",
    "group": "Design",
    "image": "/images/laws/law-of-demeter.png",
    "overview": "迪米特法则，也被称为「最少知识原则」或「不要与陌生人交谈」。在实践中，如果对象 A 持有对象 B 的引用，而 B 持有 C 的引用，那么 A 不应该通过 B 调用 C 的方法（如 a.getB().getC().doSomething()）——A 可以和 B 交谈，B 可以和 C 交谈，但 A 不应该直接卷入 C。这促进了松耦合：如果 OrderProcessor 执行 order.getCustomer().getAddress().getZipCode()，它知道了太多关于内部结构的信息。但如果 Order 有一个方法 getShippingZip() 内部导航其 customer/address，OrderProcessor 可以调用它而对结构变化一无所知。",
    "examples": "一个 Presenter 对象持有对包含 TextField 的 UI View 的引用。不遵循 LoD 的话，presenter 可能执行 view.getTextField().setText(\"Hello\")。LoD 鼓励 View 提供一个 setUserMessage(String) 方法，内部调用 textField.setText。Presenter 不需要知道具体有一个 TextField——如果后来 View 改用 Label，Presenter 的代码不需要改变。你可以通过数点来识别违规：a.getB().getC().doSomething() 有两个串联的点，多了一个。",
    "origins": "迪米特法则由伊恩·霍兰德（Ian Holland）及其同事于 1987 年左右在东北大学首次描述，作为迪米特项目（Demeter Project）的一部分。它以该项目命名，而该项目本身以希腊农业女神命名，象征着软件的「生长」方法。研究人员包括卡尔·利伯赫尔（Karl Lieberherr）等，他们用座右铭「只和你的朋友交谈」来总结这条规则。",
    "takeaways": [
      "一个对象只应调用以下对象的方法：自身、它的直接组件、它的函数参数、或它创建的对象——不应通过一个对象导航到另一个对象。",
      "如果对象 A 只调用 B（它的直接朋友）而不深入 B 的内部（如 C），那么对 C 的更改不会影响 A——减少了变更的影响范围。",
      "遵守 LoD 通常需要添加包装方法或委托，虽然可能增加方法数量，但会产生更清晰的交互和更松的耦合。",
      "它是信息隐藏原则的具体体现——每个对象隐藏其内部结构，只暴露必要的接口。"
    ],
    "related": [
      "solid-principles",
      "law-of-leaky-abstractions",
      "hyrums-law",
      "kiss-principle"
    ],
    "further_reading": [
      {
        "title": "Object-Oriented Programming: An Objective Sense of Style",
        "url": "https://www2.ccs.neu.edu/research/demeter/papers/law-of-demeter/oopsla88-law-of-demeter.pdf",
        "description": "利伯赫尔、霍兰德和里尔（Lieberherr, Holland, and Riel）的原始论文"
      },
      {
        "title": "Law of Demeter - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Law_of_Demeter",
        "description": "该原则概述及示例"
      },
      {
        "title": "The Paperboy, The Wallet, and The Law Of Demeter",
        "url": "https://www2.ccs.neu.edu/research/demeter/demeter-method/LawOfDemeter/paper-boy/demeter.pdf",
        "description": "大卫·博克（David Bock）的介绍论文——包含著名的报童示例"
      },
      {
        "title": "Design Patterns: Elements of Reusable Object-Oriented Software",
        "url": "https://amzn.to/3LnM5o6",
        "description": "四人帮的设计模式——包含强制松耦合的模式"
      }
    ]
  },
  {
    "title": "最小惊讶原则",
    "titleEn": "Principle of Least Astonishment",
    "slug": "principle-of-least-astonishment",
    "description": "软件和接口的行为方式应该最小化用户和其他开发者的惊讶。",
    "descriptionEn": "Software and interfaces should behave in a way that least surprises users and other developers.",
    "experience": "mid",
    "group": "Design",
    "image": "/images/laws/principle-of-least-astonishment.png",
    "overview": "最小惊讶原则（POLA）是 UI 设计、API 设计、编码和文档中的通用原则。其思想很简单：不要惊讶用户。系统的行为方式应该与用户对其应如何工作的心智模型相匹配。违反这一原则不一定破坏功能，但它破坏了信任和易用性。在编码中，该原则指出你的代码行为应该与开发者根据名称、类型和上下文所期望的一致——选择符合标准惯例的默认值和行为，避免「惊喜」的副作用。",
    "examples": "如果你有一个方法 deleteFile()，人们会期望它删除文件——它不应该秘密地归档文件或者在文件不存在时抛出错误。toString() 方法应该返回人类可读的文本，而不是二进制数据块。如果一个函数 parseDate(str) 在内部修改了全局日期格式设置，那就是令人惊讶的。一个名为 isReady 的变量应该是布尔值，一个名为 compute 的函数应该返回某些东西而不是修改全局状态。满意的用户或开发者使用某样东西时，它「就是如预期般工作」——这反过来建立了信任和效率。",
    "origins": "最少惊讶的概念根植于早期的人机交互。早期提及出现在 1967 年左右的 PL/I 编程语言文档中，抱怨某些行为违反了「最少惊讶法则」。该原则在 1972 年的一篇关于编程语言设计的出版物中被明确陈述。在 Unix 社区中，埃里克·雷蒙德（Eric Raymond）的《Unix 编程艺术》将其称为「最少惊讶规则」。",
    "takeaways": [
      "设计决策应与用户期望保持一致——当某人使用一个组件时，其行为不应令人惊讶或反直觉。",
      "遵循平台规范或标准惯例能产生最少的惊讶。",
      "在实践中提高了可用性和开发者体验——用户可以预测如何交互，开发者可以通过类比相似 API 来预测使用方法。",
      "惊喜常常导致错误——可预测性是高质量软件接口的核心属性。"
    ],
    "related": [
      "hyrums-law",
      "kiss-principle",
      "postels-law",
      "law-of-demeter"
    ],
    "further_reading": [
      {
        "title": "The Art of Unix Programming",
        "url": "https://amzn.to/4q4uTTY",
        "description": "埃里克·S·雷蒙德的书中包含最少惊讶规则"
      },
      {
        "title": "How to Design a Good API and Why it Matters",
        "url": "https://www.youtube.com/watch?v=aAb7hSCtvGw",
        "description": "乔舒亚·布洛赫（Joshua Bloch）关于 API 设计原则的演讲"
      },
      {
        "title": "Principle of Least Astonishment - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Principle_of_least_astonishment",
        "description": "该原则概述，包含历史和示例"
      }
    ]
  },
  {
    "title": "邓宁-克鲁格效应",
    "titleEn": "Dunning-Kruger Effect",
    "slug": "dunning-kruger-effect",
    "description": "你对某件事了解得越少，就越倾向于过度自信。",
    "descriptionEn": "The less you know about something, the more confident you tend to be.",
    "experience": "junior",
    "group": "Decisions",
    "image": "/images/laws/dunning-kruger-effect.png",
    "overview": "邓宁-克鲁格效应是一种认知偏差：在某个领域能力较低的人往往会高估自己的能力，因为他们缺乏识别自己不足之处所需的技能。在软件工程中，初级开发者可能对自己解决复杂问题的能力过于自信，而更有经验的开发者可能因了解问题的深度而表现出更多的谦逊。这不是贬低初学者——而是提醒所有人：真正的专业能力包含了对自身知识边界的清醒认识。这也是为什么代码审查和结对编程如此重要——他人的审视可以帮助弥补个人的认知盲区。",
    "examples": "一位刚学了两个月的开发者宣称「React 非常简单，我已经完全掌握了」。六个月后，随着接触更多真实项目中的边缘情况，她意识到自己最初的理解是多么浅薄。而一位有十年经验的架构师可能会说「分布式系统有很多我不知道的东西」。这不是架构师能力不足——恰恰相反，她的经验让她足够了解这个领域，从而知道自己知识的边界在哪里。",
    "origins": "大卫·邓宁（David Dunning）和贾斯汀·克鲁格（Justin Kruger）在 1999 年发表于《人格与社会心理学杂志》的论文中描述并命名了这一效应。他们的研究表明：能力最低四分位的参与者倾向于显著高估自己的能力，这正是因为他们缺乏识别自己表现不佳的元认知能力。",
    "takeaways": [
      "能力较低的人往往意识不到自己的不足——这不是态度问题，而是缺乏判断自己表现所需的技能。",
      "你真的擅长某件事的标志之一是：你清楚地知道自己不知道什么——即你的知识边界在哪里。",
      "持续学习和寻求反馈是对抗邓宁-克鲁格效应的最好方法。",
      "在团队中，创造心理安全的环境让每个人都可以坦然说「我不懂」是极其重要的。"
    ],
    "related": [
      "brooks-law",
      "hanlons-razor"
    ],
    "further_reading": [
      {
        "title": "Dunning-Kruger Effect - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect",
        "description": "维基百科关于这一认知偏差的全面概述"
      },
      {
        "title": "Unskilled and Unaware of It - Original 1999 Paper",
        "url": "https://psycnet.apa.org/doi/10.1037/0022-3514.77.6.1121",
        "description": "邓宁和克鲁格 1999 年的原始研究论文"
      },
      {
        "title": "We Are All Confident Idiots - David Dunning",
        "url": "https://psmag.com/social-justice/confident-idiots-92793",
        "description": "David Dunning 对这一效应的通俗解读"
      },
      {
        "title": "Thinking, Fast and Slow",
        "url": "https://amzn.to/48WboH0",
        "description": "Daniel Kahneman 关于认知偏差的开创性著作"
      }
    ]
  },
  {
    "title": "汉隆剃刀",
    "titleEn": "Hanlon's Razor",
    "slug": "hanlons-razor",
    "description": "能用愚蠢或粗心解释的，不要归咎于恶意。",
    "descriptionEn": "Never attribute to malice that which is adequately explained by stupidity or carelessness.",
    "experience": "junior",
    "group": "Decisions",
    "image": "/images/laws/hanlons-razor.png",
    "overview": "汉隆剃刀建议我们在面对糟糕的结果时，不要预设恶意，而应首先考虑人为错误或无知。如果一次提交引入了安全漏洞，那很可能是失误，而非蓄意破坏。在分布式系统中遇到「不可能」的错误时，大概率是配置问题或竞争条件，而非黑客入侵。在代码审查中看到糟糕的代码时，更可能是同事赶工或缺乏经验所致，而非有意破坏。应用汉隆剃刀能减少冲突，改善沟通，帮助我们在指责之前先寻找系统性原因。它不是让我们天真地否认恶意存在的可能性，而是提醒我们：在缺乏明确证据的情况下，错误远比阴谋更常见。",
    "examples": "一位客户报告你的软件「删除了我所有的数据！」很容易恐慌，以为是一位心怀不满的员工埋了逻辑炸弹。但汉隆剃刀会让你首先检查是否存在一个普通的 bug——结果你发现是文件过滤逻辑中的一个差一错误。另一个例子：某次部署后性能严重下降，直觉是「运维组在搞破坏」。但考察后发现，他们只是将一台关键的负载均衡器遗漏在部署脚本之外——这是一个过程错误，而非蓄意破坏。",
    "origins": "罗伯特·J·汉隆（Robert J. Hanlon）将这一原则投稿给了 1980 年一本墨菲定律变体汇编。拿破仑和歌德都有过类似表述，大意是不要将无能造成的后果归因于恶意。这一原则在软件和 DevOps 文化中已变得极为重要。",
    "takeaways": [
      "当事情出错时，大概率不是恶意，而是一个错误或误解。",
      "不要立刻跳到「系统被黑了」或「有人故意破坏」的结论。先考虑更简单的解释（例如，配置文件遗漏或拼写错误）。",
      "如果同事的代码有问题，大概率不是蓄意破坏。可能是因为赶工或不知情。尝试以提问而非指责的方式去沟通。"
    ],
    "related": [
      "occams-razor",
      "goodharts-law",
      "postels-law"
    ],
    "further_reading": [
      {
        "title": "Hanlon's Razor - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hanlon%27s_razor",
        "description": "该原则及其起源的概述"
      },
      {
        "title": "Blameless Postmortems - Etsy",
        "url": "https://www.etsy.com/codeascraft/blameless-postmortems/",
        "description": "Etsy 如何在事件响应中应用无责备文化"
      },
      {
        "title": "The Field Guide to Understanding Human Error",
        "url": "https://amzn.to/3LbyIas",
        "description": "Sidney Dekker 关于系统故障中人为因素的著作"
      }
    ]
  },
  {
    "title": "奥卡姆剃刀",
    "titleEn": "Occam's Razor",
    "slug": "occams-razor",
    "description": "最简单的解释往往是最准确的。",
    "descriptionEn": "The simplest explanation is often the most accurate one.",
    "experience": "junior",
    "group": "Decisions",
    "image": "/images/laws/occams-razor.png",
    "overview": "奥卡姆剃刀是一条问题解决原则：当有多个可能的解决方案时，倾向于选择最简单的那个。在软件中，这一原则与 KISS（Keep It Simple, Stupid）理念相互呼应。遇到一个复杂的 bug 时，不要先假设内核或编译器有问题，而应先检查简单的可能性：拼写错误、配置遗漏或最近一次代码变更。在设计系统时，能用一个简单的单体应用解决的问题，不要引入复杂的微服务架构。简单的代码更易于理解、维护和调试；复杂的代码有更多的潜在故障点。奥卡姆剃刀不是说复杂方案永远是错的，而是说在没有足够证据的情况下，不要无必要地增加复杂度。",
    "examples": "应用奥卡姆剃刀的经典调试案例：构建系统失败了。善于复杂思考的人可能认为存在某种微妙的回归 bug、环境差异或竞态条件。但应用奥卡姆剃刀后，你首先检查最近的代码变更——结果发现有个文件少了一个分号。另一个例子：支付系统间歇性失败，复杂的理论是数据库集群故障或网络分区，实际原因是一行配置中多了个空格。",
    "origins": "奥卡姆剃刀可追溯到 14 世纪英国哲学家奥卡姆的威廉。他的拉丁文原版「Pluralitas non est ponenda sine necessitate」意为「如无必要，勿增实体」。它最初是神学和哲学中的一条推理原则，后来成为科学方法和软件工程中的基础启发式方法。",
    "takeaways": [
      "简单的代码更易于理解、维护和调试，而复杂的代码有更多的潜在故障点。系统架构中要移除或避免不必要的活动部件。",
      "调试时，先从最简单的解释开始，再跳到复杂的理论。",
      "给产品添加更多功能只会增加复杂度，而不一定带来真正的价值。奥卡姆剃刀提醒我们：少即是多。"
    ],
    "related": [
      "kiss-principle",
      "yagni",
      "galls-law"
    ],
    "further_reading": [
      {
        "title": "Ockham's Razors: A User's Manual",
        "url": "https://amzn.to/4jfnRZX",
        "description": "Elliott Sober 关于科学中简约性原则的全面分析"
      },
      {
        "title": "Inference to the Best Explanation",
        "url": "https://www.routledge.com/Inference-to-the-Best-Explanation/Lipton/p/book/9780415242028",
        "description": "Peter Lipton 关于解释性推理和简洁性的探索"
      },
      {
        "title": "Simplicity (Stanford Encyclopedia of Philosophy)",
        "url": "https://plato.stanford.edu/entries/simplicity/",
        "description": "奥卡姆剃刀与简约性原则的深入哲学分析"
      },
      {
        "title": "No Silver Bullet",
        "url": "https://en.wikipedia.org/wiki/No_Silver_Bullet",
        "description": "Fred Brooks 关于软件中偶然复杂度与本质复杂度的论述"
      }
    ]
  },
  {
    "title": "沉没成本谬误",
    "titleEn": "Sunk Cost Fallacy",
    "slug": "sunk-cost-fallacy",
    "description": "因已经投入了时间或精力而固守某个选择，即使放弃才对你更有利。",
    "descriptionEn": "Sticking with a choice because you've invested time or energy in it, even when walking away helps you.",
    "experience": "mid",
    "group": "Decisions",
    "image": "/images/laws/sunk-cost-fallacy.png",
    "overview": "沉没成本谬误是一种影响决策的认知偏差。人类会非理性地高估自己已经投入的东西——无论是金钱、时间还是精力——即便这些投入已经无法收回。在软件工程中，它无处不在：一个团队花两年构建了自定义框架，尽管它又慢又难用，但「投入太多，不能放弃」；一个重构已经做了三个月，搞砸了代码库，但因为已经花了时间就不愿回退；一个项目显然无法按时交付，但没人愿意喊停。沉没成本谬误让我们把过去的投入当作继续前进的理由，而理性的决策应该只考虑未来的成本和收益。识别这种偏差，才能做出更清晰的工程决策。",
    "examples": "一家公司花了两年时间构建内部 CMS，结果发现它漏洞百出，团队效率极低。客观分析会表明采用现成的 CMS 更好，但「我们投入了这么多」的心态让他们继续维护这个糟糕的系统。另一个案例：一个微服务迁移项目原本预计六个月，现在已是第十八个月，复杂度远超预期。尽管停下来的理由很充分，但「马上就到了」的想法让他们继续投入更多资源。",
    "origins": "沉没成本的概念源自经济学。「沉没成本谬误」一词由行为经济学家和心理学家在 20 世纪末普及。诺贝尔奖得主丹尼尔·卡尼曼（Daniel Kahneman）和阿莫斯·特沃斯基（Amos Tversky）展示了人们如何非理性地让过去不可收回的投资影响当前决策，这与理性经济行为者的假设相矛盾。",
    "takeaways": [
      "不要因为过去的投入而继续困在错误中。「我们已经投了一年了」不是继续的理由，如果方案明显行不通的话。",
      "健康的工程组织会转向或停止不再有意义的项目。因为沉没成本而继续坏项目，通常只会导致更大的损失。",
      "使用明确的衡量标准和决策点：「如果我们到季度末没达到目标 X，就重新评估或终止。」",
      "团队应该能够安全地承认一个项目行不通，而不必担心被责备。"
    ],
    "related": [
      "occams-razor",
      "technical-debt",
      "second-system-effect"
    ],
    "further_reading": [
      {
        "title": "The Psychology of Sunk Cost",
        "url": "https://www.sciencedirect.com/science/article/abs/pii/0749597885900494",
        "description": "Arkes 和 Blumer 1985 年关于沉没成本心理学的奠基性论文"
      },
      {
        "title": "The Sunk Cost Fallacy",
        "url": "https://thedecisionlab.com/biases/the-sunk-cost-fallacy",
        "description": "从行为科学角度的全面概述及案例"
      },
      {
        "title": "Thinking, Fast and Slow",
        "url": "https://amzn.to/4sfXfMr",
        "description": "Daniel Kahneman 涵盖包括沉没成本在内的认知偏差的开创性著作"
      }
    ]
  },
  {
    "title": "地图不等于疆域",
    "titleEn": "The Map Is Not the Territory",
    "slug": "map-is-not-the-territory",
    "description": "我们对现实的表述不等于现实本身。",
    "descriptionEn": "Our representations of reality are not the same as reality itself.",
    "experience": "mid",
    "group": "Decisions",
    "image": "/images/laws/map-is-not-territory.png",
    "overview": "「地图不等于疆域」是一个源自普通语义学的思维模型。它揭示了一个核心洞见：我们对事物的感知或概念模型并非事物本身。在软件工程中，这意味着设计文档、UML 图、架构示意图都是抽象，不是运行中的真实系统。一个微服务架构图显示服务 A 通过 Kafka 与 B、C 通信——这幅图假设「网络是可靠的」「延迟可以忽略」，但在云基础设施中，网络分区、超时和重试才是现实。数据模型不等于真实的用户行为。用户故事不等于用户实际如何与产品交互。模型是有用的指引，但当来自真实系统的证据与模型矛盾时，永远要相信真实系统。",
    "examples": "设计一个微服务系统时，架构图显示服务 A 通过 Kafka 与 B 和 C 通信。图假设「网络可靠」「延迟可忽略」，但在云基础设施中，网络分区、超时和重试是常态——而图对这些只字未提。另一个例子：数据模型看起来完美无缺，直到真实用户输入包含 emoji、空值和不一致的格式，而这些在模型中都未曾考虑过。",
    "origins": "这一短语因阿尔弗雷德·柯日布斯基（Alfred Korzybski）在《科学与健全心智》（1933）中的推广而广为人知。柯日布斯基强调，语言和知识常常误导我们将自己的构念误认为现实——这会导致系统性的思维错误。",
    "takeaways": [
      "设计文档、UML 图和架构示意图是抽象。不要把蓝图与运行中的实际软件混为一谈。",
      "实现系统时，预料到会出现初始设计中未曾捕捉到的意外因素。准备好根据开发和测试中发现的新「地形」来调整计划。",
      "模型和设计对指导开发很有价值，但要始终愿意在来自真实系统的证据与模型矛盾时质疑假设。"
    ],
    "related": [
      "goodharts-law",
      "galls-law",
      "law-of-leaky-abstractions"
    ],
    "further_reading": [
      {
        "title": "Science and Sanity",
        "url": "https://www.holybooks.com/wp-content/uploads/Science-and-Sanity.pdf",
        "description": "Alfred Korzybski 关于普通语义学的奠基性著作"
      },
      {
        "title": "Steps to an Ecology of Mind",
        "url": "https://www.press.uchicago.edu/ucp/books/book/chicago/S/bo3620295.html",
        "description": "Gregory Bateson 关于人类学、精神病学和认识论的文集"
      }
    ]
  },
  {
    "title": "确认偏误",
    "titleEn": "Confirmation Bias",
    "slug": "confirmation-bias",
    "description": "倾向于青睐那些支持我们已有信念或想法的信息。",
    "descriptionEn": "A tendency to favor information that supports our existing beliefs or ideas.",
    "experience": "mid",
    "group": "Decisions",
    "image": "/images/laws/confirmation-bias.png",
    "overview": "我们都喜欢自己是正确的。确认偏误是我们大脑为了让自己更频繁地感觉正确而采取的欺骗方式。心理上，一旦我们形成某种观点，就会下意识地过滤信息：注意到支持它的证据，忽略或贬低与之矛盾的证据。在软件工程中，它几乎无处不在。调试时，你「知道」bug 在哪里，于是只寻找支持该假设的证据，忽略了指向其他地方的线索。代码审查时，你信任一位同事所以略过了潜在问题，或者你对某个模式有偏见所以过度审视。架构决策时，你只谷歌支持你首选方案的博客文章。确认偏误让我们看不到比自己愿意承认的更多的东西。",
    "examples": "在代码审查中，信任同事技能的审查者可能会略过潜在问题，假设代码应该是好的。反过来的情况：预期初级开发者写出糟糕代码的审查者，会在完全正常的代码中找到「问题」来确认自己的偏见。调试时，你「知道」是缓存层的问题，花了几个小时只检查缓存代码——忽略了数据库中一个简单的错误配置，因为它不符合你的理论。",
    "origins": "最早识别确认偏误的人之一是彼得·卡思卡特·韦森（Peter Cathcart Wason），一位英国认知心理学家。1960 年，他进行了一项著名的实验（韦森规则发现任务），参与者在其中表现出强烈的倾向于寻找确认自己假设的信息，而非试图证伪它们，这违背了合理的科学推理原则。",
    "takeaways": [
      "在代码审查或调试时，注意自己是否只寻找支持最初猜测的证据。",
      "在积极思考问题时挑战自己。如果你对一个问题有看法，试着问：「如果我错了，我预期会看到什么？」这样我们才能对抗只确认的自然偏差。",
      "在团队决策中（例如技术栈和/或设计决策），寻求持不同意见的人的输入。确认偏误可以通过审视替代方案来克服。例如，如果整个团队都「感觉」技术 X 是最佳选择，指派某人去研究反对技术 X 的观点。",
      "基于客观标准（事实，而非观点）做决策。自动化测试、性能指标和实验（A/B 测试）可以给出不受人类偏差影响的真相。"
    ],
    "related": [
      "dunning-kruger-effect",
      "hanlons-razor",
      "goodharts-law"
    ],
    "further_reading": [
      {
        "title": "Confirmation Bias: A Ubiquitous Phenomenon in Many Guises",
        "url": "https://journals.sagepub.com/doi/10.1037/1089-2680.2.2.175",
        "description": "Raymond Nickerson 1998 年关于确认偏误研究的全面综述"
      },
      {
        "title": "On the Failure to Eliminate Hypotheses in a Conceptual Task",
        "url": "https://www.tandfonline.com/doi/abs/10.1080/17470216008416717",
        "description": "Peter Wason 1960 年关于规则发现任务的奠基性论文"
      },
      {
        "title": "Thinking, Fast and Slow",
        "url": "https://amzn.to/48WboH0",
        "description": "Daniel Kahneman 对包括确认偏误在内的认知偏差的探索"
      }
    ]
  },
  {
    "title": "炒作周期与阿马拉定律",
    "titleEn": "The Hype Cycle & Amara's Law",
    "slug": "hype-cycle-amaras-law",
    "description": "我们倾向于高估技术的短期影响，而低估其长期影响。",
    "descriptionEn": "We tend to overestimate the effect of a technology in the short run and underestimate the impact in the long run.",
    "experience": "mid",
    "group": "Decisions",
    "image": "/images/laws/gartner-cycle.png",
    "overview": "这一法则描述了科技领域熟悉的繁荣-泡沫-萧条周期。高德纳的炒作周期捕捉了这一模式：新技术引发夸大期望，在现实不够美好时跌入幻灭低谷，然后在真正有用的地方慢慢爬上生产力高原。阿马拉定律补充说：我们几乎总是高估短期影响（以为革命就在明天），并低估长期影响（几十年后它真的改变了世界）。对软件工程师来说，这意味着不要被每一波新的炒作浪潮冲昏头脑。在评估新技术时，问自己：它解决了什么实际问题？成熟度和社区生态如何？同时，也不要在长期内忽视真正的变革——互联网、开源和云计算都遵循了这一模式。",
    "examples": "AI 在 1960-70 年代经历了第一次大的炒作浪潮，当时人们认为通用 AI 指日可待。当宏大的承诺没有兑现时，「AI 寒冬」降临，许多人将 AI 作为理论幻想而放弃——然而几十年后，机器学习和 LLM 确确实实改变了世界。类似地，NoSQL 运动一度宣称「SQL 已死」，但事后看来，NoSQL 有它的用武之地，而关系型数据库仍然健在且至关重要。",
    "origins": "阿马拉定律以罗伊·阿马拉（Roy Amara）命名，他是一位美国研究员和未来学家，曾任未来研究所主席。他观察到人们倾向于在短期内高估技术，而在长期内低估它。高德纳炒作周期由高德纳咨询公司开发，作为描述新兴技术成熟度曲线的可视化框架。",
    "takeaways": [
      "早期，人们高估技术在短期内能做什么，导致不切实际的期望。",
      "在更长的时间尺度上，同一技术的真正潜力会显现出来，通常远超最初的想象。阿马拉定律提醒我们，我们倾向于低估重大创新的长期影响。",
      "对于开发者和技术领导者来说，这意味着不要被炒作周期裹挟。保持耐心，根据经过验证的价值来评估新工具，而非仅仅看热度。",
      "将创新视为有限的预算。好的团队将稳定、经过验证的技术用于大多数需求，只有在新炒作技术真正解决实际问题时才采用。"
    ],
    "related": [
      "goodharts-law",
      "galls-law",
      "second-system-effect"
    ],
    "further_reading": [
      {
        "title": "Gartner Hype Cycle",
        "url": "https://www.gartner.com/en/research/methodologies/gartner-hype-cycle",
        "description": "Gartner 对炒作周期方法论的官方解释"
      },
      {
        "title": "Institute for the Future",
        "url": "https://www.iftf.org/",
        "description": "Roy Amara 领导的专注于未来思维和预见性的组织"
      }
    ]
  },
  {
    "title": "林迪效应",
    "titleEn": "The Lindy Effect",
    "slug": "lindy-effect",
    "description": "某物已经使用的时间越长，它就越可能继续被使用。",
    "descriptionEn": "The longer something has been in use, the more likely it is to continue being used.",
    "experience": "mid",
    "group": "Decisions",
    "image": "/images/laws/the-lindy-effect.jpg",
    "overview": "林迪效应颠覆了我们对「老化」的直觉。对于生物来说，越老意味着越短的预期寿命。但对技术而言，情况往往相反：某样东西已经使用的时间越长，它就越可能继续被使用。COBOL 有 60 多年历史，仍然运行着全球大量的金融与政府基础设施。SQL 已经存在 50 多年，依旧是最普遍的数据查询语言。Unix 哲学、TCP/IP、Lisp——这些老朋友都存在了几十年且仍在广泛使用。林迪效应的机制是：如果某样东西在几十年的技术变迁、范式转换和竞争性替代方案中存活了下来，它必定解决了某些根本性的问题，因此它不可能在短期内消失。",
    "examples": "COBOL 是 1959 年的语言，超过 60 年历史，但仍运行着全球庞大的金融和政府基础设施。某些估计认为 70-80% 的全球金融交易涉及 COBOL。学习 COBOL 似乎很可笑——但林迪效应暗示 COBOL 程序员可能比最新 JavaScript 框架专家有更可持续的职业。Unix shell 已有 50 多年历史，今天每个开发者仍然在使用它。",
    "origins": "这个词由记者阿尔伯特·戈德曼（Albert Goldman）于 1964 年创造，以纽约市的 Lindy's 熟食店命名，那里是艺人们著名的聚集地。喜剧演员们观察到，百老汇剧目的「剩余寿命」与其已演出的时间成比例。纳西姆·尼古拉斯·塔勒布（Nassim Nicholas Taleb）在《反脆弱》中将这一概念推广到更广泛的领域。",
    "takeaways": [
      "林迪效应指出，如果某样东西（技术、工具、概念）已经持久了很长时间，它很可能会继续持续更久。",
      "对于开发者而言，林迪法则提醒我们要投资于历久弥新的技能和经过验证的基础知识（算法、核心语言、设计原则），而不是追逐每个可能几年后就被淘汰的新框架。",
      "在评估技术时运用林迪效应。已存在一段时间的东西在未来也会存在更久（即选择「无聊」的技术）。"
    ],
    "related": [
      "hyrums-law",
      "postels-law",
      "hype-cycle-amaras-law"
    ],
    "further_reading": [
      {
        "title": "Antifragile: Things That Gain from Disorder",
        "url": "https://amzn.to/4bc1Ust",
        "description": "Nassim Nicholas Taleb 推广林迪效应概念的著作"
      },
      {
        "title": "An Expert Called Lindy",
        "url": "https://medium.com/incerto/an-expert-called-lindy-fdb30f146eaf",
        "description": "Taleb 深入探索林迪效应的文章"
      }
    ]
  },
  {
    "title": "第一性原理思维",
    "titleEn": "First Principles Thinking",
    "slug": "first-principles-thinking",
    "description": "将复杂问题分解为最基本的要素，然后从那里重新构建。",
    "descriptionEn": "Breaking a complex problem into its most basic blocks and then building up from there.",
    "experience": "mid",
    "group": "Decisions",
    "image": "/images/laws/first-principles-thinking.png",
    "overview": "第一性原理思维是一种解决问题的根本性方法。你不是盲目照搬现有方案（「我们这样做是因为别人也这样做」），而是将问题拆解到最基本的事实，然后从这些基石出发重新构建解决方案。在软件工程中，这意味着不因为「大家都用框架 Y」就选择它，而是追问：我们真正需要解决的问题是什么？最简单的解决方案是什么？现有的方案带来了哪些包袱？这种方法能带来突破性的简化——当我们意识到某个微服务层只是因为我们模仿了另一家公司的架构而存在时，我们可以将其移除，并简化整个系统。",
    "examples": "SpaceX 之前，发射火箭成本高昂，因为行业惯例使用昂贵材料且火箭一次性使用。埃隆·马斯克运用第一性原理：火箭是由什么构成的？铝、钛、铜。材料成本仅占火箭总价的 2%。为什么不回收火箭？通过从原材料成本和可重复使用性的基本原理出发，SpaceX 大幅降低了发射成本。在软件中，质疑「为什么这个 API 需要 15 个字段」可以导向更简洁、更易维护的设计。",
    "origins": "「第一性原理」一词根植于古典哲学。亚里士多德将第一性原理定义为无法从任何其他事物推导出来的基础命题——知识的基石。在现代工程中，特斯拉和 SpaceX 的埃隆·马斯克普及了这一术语，他将其描述为他解决问题方法的核心。",
    "takeaways": [
      "不要接受既定的问题定义。将问题分解为其部件并质疑假设：它们真的成立，还是只是被接受的标准？一旦掌握了底层需求，你可能会开发出新的解决方案。",
      "「大家都用框架 Y 做这个」不能成为你做同样选择的理由。第一性原理思维推动你去问为什么人们以某种方式做某件事。",
      "不要说「这个功能需要 3 个月，因为之前类似的功能就花了那么久」，而是分解功能。从基础出发估算，这有时会揭示「类似」功能有额外的、你可能已经不再面临的复杂因素。"
    ],
    "related": [
      "occams-razor",
      "kiss-principle",
      "galls-law"
    ],
    "further_reading": [
      {
        "title": "First Principles: The Building Blocks of True Knowledge",
        "url": "https://fs.blog/first-principles/",
        "description": "Farnam Street 关于第一性原理思维的全面指南"
      },
      {
        "title": "Posterior Analytics - Aristotle",
        "url": "https://plato.stanford.edu/entries/aristotle-logic/",
        "description": "斯坦福哲学百科关于亚里士多德基础逻辑的条目"
      },
      {
        "title": "How to Solve It - George Pólya",
        "url": "https://amzn.to/4b9q3Qo",
        "description": "关于数学问题解决和启发式方法的经典著作"
      }
    ]
  },
  {
    "title": "逆向思维",
    "titleEn": "Inversion",
    "slug": "inversion",
    "description": "通过考虑相反的结果并从那一点反向推导来解决问题。",
    "descriptionEn": "Solving a problem by considering the opposite outcome and working backward from it.",
    "experience": "mid",
    "group": "Decisions",
    "image": "/images/laws/inversion.png",
    "overview": "逆向思维的核心洞见是：当你从相反的角度审视问题时，特定的见解会变得清晰可见。在软件工程中，与其只为最佳情况做设计，不如刻意从最坏情况出发。与其问「我们如何交付这个项目？」，不如问「什么东西会导致我们错过截止日期？」。与其只测试快乐路径，不如设计故意破坏系统的混沌实验。Netflix 的 Chaos Monkey 就是逆向思维的绝佳体现：随机终止生产服务器以验证系统的韧性。通过设想失败，我们反而能更好地构建成功。项目中可以使用「事前验尸」技术：假设项目已经失败，倒推出最可能的原因。",
    "examples": "Netflix 的 Chaos Monkey 是一个典型例子。通常，工程师努力保持系统运行。Chaos Monkey 则做相反的事：在生产环境中随机终止服务器以测试韧性。这让 Netflix 能够建立能抵御实际故障的系统——通过逆向思维，他们让系统变得更强大。事后验尸分析已经发生的事故，而事前验尸假设项目已经失败，然后推导可能的原因——这能在问题发生前揭示风险。",
    "origins": "逆向思维因投资者查理·芒格（Charlie Munger）的名言而知名：「我只想知道我会死在哪里，这样我就永远不会去那个地方。」芒格受到 19 世纪数学家卡尔·古斯塔夫·雅可比（Carl Gustav Jacobi）的启发，雅可比的座右铭是「颠倒，永远颠倒」（Invert, always invert）。",
    "takeaways": [
      "对任何目标，也要问反向的问题。如果目标是「按时交付项目」，我们应该思考「什么会导致我们错过截止日期？」列出这些因素（范围蔓延、任务低估等）有助于我们实现目标并规避问题。",
      "使用事前验尸等技巧：假设项目已经失败了，然后确定可能的原因。这种批判性思维可以揭示乐观规划忽略的风险。",
      "在设计和测试中，要考虑系统被恶意使用的边缘情况。例如，恶意用户如何破坏这个 API？这种逆向思维能导向更好的解决方案（例如，一旦理解了事物如何被破坏，就可以添加验证、限流等）。"
    ],
    "related": [
      "first-principles-thinking",
      "murphys-law",
      "premature-optimization"
    ],
    "further_reading": [
      {
        "title": "Poor Charlie's Almanack - Charlie Munger",
        "url": "https://www.stripe.press/poor-charlies-almanack",
        "description": "芒格关于包括逆向思维在内的思维模型的演讲和谈话合集"
      },
      {
        "title": "Antifragile - Nassim Nicholas Taleb",
        "url": "https://en.wikipedia.org/wiki/Antifragile_(book)",
        "description": "探索从混乱和压力中获益的系统的著作"
      }
    ]
  },
  {
    "title": "帕累托原则（二八法则）",
    "titleEn": "Pareto Principle (80/20 Rule)",
    "slug": "pareto-principle",
    "description": "80% 的后果来自 20% 的原因。",
    "descriptionEn": "80% of the problems result from 20% of the causes.",
    "experience": "junior",
    "group": "Decisions",
    "image": "/images/laws/pareto-principle.png",
    "overview": "帕累托原则与其说是定律，不如说是观察，但 80/20（或类似的 90/10 等比例）模式确实频繁出现。在软件工程领域，我们常说「80% 的时间花在 20% 的代码上」「80% 的错误来自 20% 的 bug」「80% 的功能被 20% 的用户使用」。微软发现，Windows 和 Office 中约 20% 的 bug 造成了 80% 的所有崩溃——而仅仅 1% 的 bug 造成了约 50% 的错误。这个原则告诉我们：并非所有努力都是平等的，识别并聚焦于那关键的少数，而非平均用力。不要为已经很快的代码做微优化，也不要为没人用的功能写测试——把精力花在最热、最有用的路径上。",
    "examples": "微软发现，Windows 和 Office 中约 20% 的 bug 造成了 80% 的所有崩溃，而仅仅 1% 的 bug 造成了约 50% 的错误。通过聚焦于那关键的 1-20% 的 bug，他们以相对较小的投入显著提升了稳定性。类似地，大多数 SaaS 产品发现约 20% 的功能占据了 80% 的使用量——而整整 50% 的功能可能几乎没人用。",
    "origins": "该原则以维尔弗雷多·帕累托（Vilfredo Pareto）命名，他是一位意大利经济学家，1906 年注意到约 80% 的意大利土地由 20% 的人口拥有。1940 年代，质量管理先驱约瑟夫·朱兰（Joseph Juran）将这一原则推广到生产制造领域，并称之为「关键的少数与微不足道的多数」。",
    "takeaways": [
      "识别出对 80% 结果贡献最大的前 20% 因素。这可能是 20% 的功能占据 80% 的使用量，或 20% 的 bug 造成 80% 的崩溃。将时间和资源优先投入到这些关键的少数上，以获取最大影响。",
      "不要对所有东西投入同等的精力。如果某段代码极少运行，它可能不需要与热点路径同等的优化或关注。",
      "比例不总是精确的 80/20，但思路是一样的。使用性能分析、数据统计和数据收集来经验性地识别出不平衡在哪里。",
      "在个人层面，作为工程师或管理者，识别出哪些任务产生最大的价值。可能是编写核心功能或辅导团队成员。"
    ],
    "related": [
      "premature-optimization",
      "kiss-principle",
      "teslers-law"
    ],
    "further_reading": [
      {
        "title": "Microsoft's CEO: 80-20 Rule Applies To Bugs",
        "url": "https://www.crn.com/news/security/18821726/microsofts-ceo-80-20-rule-applies-to-bugs-not-just-features",
        "description": "微软如何应用帕累托原则来优先修复 bug"
      },
      {
        "title": "The 80/20 Principle - Richard Koch",
        "url": "https://amzn.to/44QjIFH",
        "description": "关于将帕累托原则应用于商业和生活的著作"
      },
      {
        "title": "Pareto Principle - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pareto_principle",
        "description": "该原则及其应用的概述"
      },
      {
        "title": "Full Text of 10/02 Ballmer Memo",
        "url": "https://www.eweek.com/enterprise-apps/full-text-of-10-02-ballmer-memo/",
        "description": "Steve Ballmer 2002 年引用二八法则的备忘录"
      }
    ]
  },
  {
    "title": "坎宁安定律",
    "titleEn": "Cunningham's Law",
    "slug": "cunninghams-law",
    "description": "在互联网上获得正确答案的最佳方法不是提问，而是发布错误的答案。",
    "descriptionEn": "The best way to get the correct answer on the Internet is not to ask a question, it's to post the wrong answer.",
    "experience": "junior",
    "group": "Decisions",
    "image": "/images/laws/cunningham-law.png",
    "overview": "坎宁安定律诞生于在线社区，尤其是维基和论坛。其底层观察是：断言比提问能吸引更多的参与。在维基百科上，如果有人写了错误的内容，就会有人跳出来纠正它。如果有人问了一个问题，它可能永远得不到回答。这个原则与软件开发特别相关：在代码审查中，一个具体的草案（即使有缺陷）比一个抽象的「我们该怎么做？」能引发更多的反馈；在提问时，展示你尝试过什么比你只问问题更能得到帮助。坎宁安定律不是鼓励你故意发布错误信息，而是提醒你：具体的、可被纠正的起点，往往比开放式的空白更能激发协作。",
    "examples": "一位开发者在配置一个开源库时卡住了，发了一个问题，没有回复。运用坎宁安定律，他发帖说：「给同样困惑的人——解决方案是把 ConfigMode 设为 False。」（实际上他并不确定）。几分钟内，有人回复：「不对，设为 False 会在 Windows 上崩溃，正确的做法是……」——他得到了答案。另一个例子：与其在设计评审中问「我们应该怎么设计这个？」，不如带着一份具体方案去——即使它不完美，团队也会指出需要改进的地方。",
    "origins": "坎宁安定律以沃德·坎宁安（Ward Cunningham）命名，他是一位美国程序员，以创建第一个维基软件而闻名。该定律的确切措辞通常归功于坎宁安的一位同事史蒂芬·麦基迪（Steven McGeady），他在 2000 年代早期观察到了这一现象。",
    "takeaways": [
      "网上的人喜欢纠正错误。如果你在某问题上卡住了，有时先提出一个解决方案（即使可能是错的），反而能更快得到正确答案。",
      "提问可能只得到沉默，但自信地陈述某件事（即使不对）往往会激起反应。",
      "与其无休止地问「我们应该怎么做 X？」，不如提出一份草案或原型。即使它不完全正确，有一个具体的起点通常能得到更多反馈（「不对，不能那样，应该这样做」）。"
    ],
    "related": [
      "linuss-law",
      "broken-windows-theory"
    ],
    "further_reading": [
      {
        "title": "The Wiki Way - Bo Leuf & Ward Cunningham",
        "url": "https://en.wikipedia.org/wiki/The_Wiki_Way",
        "description": "关于维基哲学和协作知识构建的著作"
      },
      {
        "title": "How to Ask Questions the Smart Way - Eric S. Raymond",
        "url": "http://www.catb.org/~esr/faqs/smart-questions.html",
        "description": "关于技术社区有效沟通的经典指南"
      },
      {
        "title": "Cunningham's Law - Wikipedia",
        "url": "https://meta.wikimedia.org/wiki/Cunningham%27s_Law",
        "description": "维基百科上关于该定律及其起源的条目"
      }
    ]
  }
];
