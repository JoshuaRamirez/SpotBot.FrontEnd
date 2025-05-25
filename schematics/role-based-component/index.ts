import { apply, mergeWith, move, Rule, template, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';

export function roleBasedComponent(options: Schema): Rule {
  const target = options.type === 'control'
    ? `src/app/Presentation/Controls/${strings.classify(options.name)}`
    : `src/app/Presentation/Screens/${strings.classify(options.name)}`;

  return mergeWith(
    apply(url('./files'), [
      template({ ...strings, ...options }),
      move(target),
    ])
  );
}

export default roleBasedComponent;
