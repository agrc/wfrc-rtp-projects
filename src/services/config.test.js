import { Validator } from 'jsonschema';
import { describe, expect, it } from 'vitest';
import appConfigs from './public/config.json';
import configSchema from './public/config.schema.json';

describe('config validation', () => {
  it('validates the config.json file', () => {
    const validator = new Validator();

    const result = validator.validate(appConfigs, configSchema);
    expect(result.valid).toBe(true);
  });
});
