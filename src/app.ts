// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero';
import { TransformerHero } from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [new HumanHero(5, 'Jack', 'male', 44, 97),
new HumanHero(5, 'Jack', 'male', 44, 97),
new HumanHero(5, 'Jack', 'male', 44, 97)];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [new TransformerHero(5, 'Jack', 2, 12, 'bad'),
new TransformerHero(5, 'Jack', 2, 12, 'bad'),
new TransformerHero(5, 'Jack', 2, 12, 'bad')];
