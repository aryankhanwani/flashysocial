/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-this-alias */
/* eslint-disable  */
import * as yup from "yup";

// Extend the yup module with your custom validation method
declare module "yup" {
  interface MixedSchema {
    /**
     * Validates a dictionary.
     * @param {TValueSchema} valueSchema - Record values validator.
     * @param {TKeySchema} keySchema - Record keys validator.
     */
    dictionary<
      TValueSchema extends yup.AnySchema,
      TKeySchema extends yup.StringSchema,
    >(
      valueSchema?: TValueSchema,
      keySchema?: TKeySchema,
    ): MixedSchema<
      Record<
        NonNullable<yup.InferType<TKeySchema>>,
        yup.InferType<TValueSchema>
      >
    >;
  }
}

yup.addMethod(
  yup.mixed<object>,
  "dictionary",
  function yupDictionary(
    valueSchema = yup.string().optional(),
    keySchema = yup.string().required(),
  ) {
    return this.test(
      "dictionary",
      "Expected the value to be a valid dictionary.",
      function yupDictionaryTest(object) {
        const scoped = this;
        if (!object) return scoped.schema;

        Object.entries(object).forEach(([key, value]) => {
          keySchema.validateSync(key);
          valueSchema.validateSync(value);
        });

        return scoped.schema;
      },
    );
  },
);

export default yup;
