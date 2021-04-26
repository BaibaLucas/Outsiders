

INSERT INTO "role"("name") VALUES 
('member'),
('administrator');

INSERT INTO "user"("lastname", "firstname", "email", "password", "username", "description", "role_id") VALUES 
('John','Back','jb@gmail.com','ggJOHNn12b!','TrailMania','Hi, i’m TrailMania', '0'),
('Jane','Doe','jd@gmail.com','ggJANEn12b!','SurfMania','Hi, i’m SurfMania', '0'),
('Eve','Sina','es@gmail.com','ggEVEn12b!','PaddleMania','Hi, i’m PaddleMania', '0'),
('Anne','Blow','ab@gmail.com','ggANEn12b!','KiteMania','Hi, i’m KiteMania', '0'),
('Katy','Wick','kw@gmail.com','ggKATYn12b!','HydroMania','Hi, i’m HydroMania', '0'),
('Jack','Johnson','jj@gmail.com','ggJACKn12b!','SnowMania','Hi, i’m SnowMania', '0');

INSERT INTO "category"("title", "description") VALUES
('Eau', 'en rivière, en mer, en lac'),
('Air', 'le bon air pur en montagne et peut-être dans les nuages'),
('Terre', 'en forêt, en montagne et pourquoi pas dans le désert' ),
('Neige', 'en montagne, en quête de poudreuse fraîche');

INSERT INTO "trip"("title", "description", "date", "time", "from", "to", "places", "minimum", "price", "duration", "sport_id", "user_id") VALUES
('Mountain Trail', 'BestTrailEver', '2021/02/04', '09:00', 'Lyon', 'Grenoble', '2', '15','0.5','15', '0'),
('Surf Lacanau', 'BestSpotEver', '2021/02/04', '05:00', 'Lyon', 'Lacanau', '2', '15','1', '15', '1'),
('Chill With My Paddle', 'Need test my new paddle', '2021/02/04', '09:00', 'Lyon', 'Grenoble', '2', '15','0.5','15', '2'),
('Wind + board = fun', 'NiceTitleMyFriend', '2021/02/04', '09:00', 'Lyon', 'Grenoble', '2', '15','0.5','15', '3'),
('HydroBoost', 'Be a good Fish', '2021/02/04', '09:00', 'Lyon', 'Grenoble', '2', '15','0.5','15', '4'),
('HappySnowing', 'RIDING MY BEST SPOT', '2021/02/04', '09:00', 'Lyon', 'Grenoble', '2', '15','0.5','15', '5');

INSERT INTO "sport"("title", "description", "category_id") VALUES 
('Canoë-kayak', 'Le canoë-kayak est une activité physique de loisir ou sportive, pratiquée avec des embarcations propulsées à la pagaie ou à la main, notamment le canoë, le kayak, le raft, ou la pirogue.', '0'),
('Canyoning', 'Le canyoning ou descente de canyon, est un sport de pleine nature apparenté à la spéléologie, à la randonnée pédestre, à l''escalade et à l''alpinisme d''une part, et aux sports d''eaux vives d''autre part.', '0'),
('Hydro-speed', 'La nage en eau vive est une activité sportive de glisse et de pleine nature née dans les années 1950 dans laquelle les nageurs descendent le cours d''une rivière, à l''aide d''un flotteur (planche d''eau vive) en se propulsant et dirigeant à l''aide de palmes.', '0'),
('Kite-surf', 'Le kitesurf, ou planche aérotractée ou encore kiteboarding, est un sport de glisse consistant à évoluer avec une planche à la surface d''une étendue d''eau en étant tracté par un cerf-volant (kite en anglais) spécialement adapté, nommé aile ou voile. Ce sport a pris son essor au début des années 2000.', '0'),
('Paddleboarding', 'Les participants au paddleboard sont propulsés par un mouvement de nage en utilisant leurs bras en position couchée ou à genoux sur un paddleboard ou une planche de surf dans l''océan.', '0' ),
('Plongée', 'La plongée en apnée peut être pratiquée comme simple activité de loisir ou en compétition. Elle peut se combiner à d''autres pratiques subaquatiques dans le cadre de la randonnée subaquatique (en alternance avec l''utilisation d''un tuba une fois en surface), de la photographie sous-marine, de la pêche sous-marine ou du tir sur cible subaquatique.', '0'),
('Rafting', 'Le rafting (de l''anglais to raft « traverser, descendre (un fleuve) en radeau »), ou le raft (abréviation familière), est une activité de loisir ou un sport qui consiste à descendre des sections de rivière à rapides dans un radeau pneumatique.', '0'),
('Snorkeling', 'Le snorkeling ou la randonnée palmée ou l''exploration à la palme ou la randonnée subaquatique ou la nage PMT (avec palmes, masque et tuba), est une activité de loisir aquatique d''observation des fonds et des espèces vivantes sous-marines.', '0' ),
('Surf', 'Le surf (abréviation française de l''anglais surf-riding, où riding signifie « monter » et surf « (vagues) déferlantes ») est une action ou une pratique physique individuelle de glisse sur les vagues, au bord de l''océan.', '0'),
('Nautisme à la voile', 'Le nautisme à la voile est l''art de naviguer avec l''aide du vent comme force propulsive. Il s''agit d''une activité de loisir ou de compétition, voire un art de vivre, qui se pratique avec différents types d''engins, du simple flotteur comme dans le cas de la planche à voile, au véritable bateau, sur lac ou sur mer.', '0'),
('Windsurf', 'La planche à voile (parfois désignée par son nom anglais, windsurf) est un type d''embarcation à voile minimaliste, c''est aussi le sport de glisse pratiqué avec cette embarcation.', '0' ),
('Wake-board', 'Le wakeboard (de l''anglais wake, sillage, et board, planche) est un sport nautique qui apparaît au début des années 1980 après l''avènement du skiboard (qui est désormais le snowboard) à partir d''une combinaison de techniques de ski nautique, de snowboard et de surf.', '0' ),
('Parapente', 'Le parapente est un aéronef dérivé du parachute, permettant la pratique du vol libre ou du paramoteur.', '1' ),
('Base-jump', 'Le base-jump ou saut extrême est un sport extrême consistant à sauter en parachute à partir d''immeubles, d''antennes, de ponts ou de falaises (et non depuis des aéronefs).', '1' ),
('ULM', 'Un planeur ultra-léger motorisé, couramment appelé ULM, est un aéronef ultra-léger muni d''un moteur et dont les conditions de navigabilité spécifiques sont simplifiées par rapport la certification d''un avion léger et soumis à une licence de pilotage plus simple que la licence de pilote privé.', '1' ),
('Enduro', 'L''enduro est une discipline de compétition de moto tout-terrain. Comme pour le rallye automobile, l''épreuve se compose d''un parcours à réaliser dans un temps imparti, généralement sur des chemins ouverts à la circulation et appelés « liaisons », et de secteurs chronométrés appelés « spéciales ».', '2'),
('Escalade', 'L’escalade, ou grimpe, parfois appelée varappe (désuet), est une pratique et un sport consistant à progresser le long d''une paroi pour atteindre le haut d''un relief ou d''une structure artificielle par un cheminement appelé voie, avec ou sans l''aide de matériel.', '2' ),
('Rando', 'La randonnée pédestre est une activité de plein air qui s''effectue à pied en suivant un itinéraire, balisé ou non, seul ou en groupe. C''est à la fois un sport et un loisir de découverte et de contemplation.', '2' ),
('Trail', 'Le trail, la course nature ou plus rarement la course en sentier, est un sport de course à pied, sur longue distance, en milieu naturel, généralement sur des chemins de terre et des sentiers de randonnée en plaine, en forêt ou en montagne.', '2' ),
('VTT', 'Le vélo tout-terrain, souvent abrégé en VTT, plus rarement appelé vélo de montagne par traduction de l''anglais mountain bike, est un vélo destiné à une utilisation sur terrain accidenté, hors des routes goudronnées. Il sert pour diverses activités de loisirs individuelles et collectives ainsi que pour des pratiques sportives réglementées par l''Union cycliste internationale.', '2' ),
('Ski', 'Le ski est un moyen de locomotion individuel de glisse pratiqué à l''aide de patins longs et étroits appelés skis, fixés aux pieds, et un ensemble de disciplines sportives essentiellement hivernales.', '3' ),
('Ski de fond', 'Le ski de fond est un sport d''hiver de la famille du ski nordique, populaire notamment en Europe, au Canada, en Russie et plus largement l''ensemble de l''Europe de l''Est ou l''Alaska, qui se pratique sur des domaines enneigés et damés.', '3' ),
('Snowboard', 'Le snowboard, surf des neiges, planche à neige au Canada ou plus rarement planche de neige, est un sport de glisse sur neige.', '3' );


INSERT INTO "message"("title", "content", "date", "user_id", "trip_id") VALUES 
('Super journée de trail qui s’annonce !', 'Hello, je participe à la sortie, ca va être cool cette journée de Trail', '2021/02/04', '1', '0'),
('Super journée de snow qui s’annonce !', 'Hello, je participe à la sortie, ca va être cool cette journée de Snow', '2021/02/04', '4', '5'),
('Super journée de surf qui s’annonce !', 'Hello, je participe à la sortie, ca va être cool cette journée de surf ! Sinon...c’est pas un peu cher 15 balles pour s’allonger sur une planche en bois dans une eau à 5 degrés ?', '2021/02/04', '0', '1'),
('Re:Super journée surf qui s’annonçait...', 'Ca sera toujours mieux que de passer la journée dans ton 9m2 sans double vitrage', '21/01/21', '1', '1'),
('Bonne ambiance !', 'ca fait 30 min que j’attends sur le parking et toujours pas de Jane...', '2021/02/04', '0', '1'),
('Super journée de hydro-boost qui s’annonce !', 'Hello, je participe à la sortie, ca va être cool cette journée de hydro-boost', '2021/02/04', '2', '4');

