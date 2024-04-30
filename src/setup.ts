/// <reference types="@testing-library/jest-dom" />
/// <reference types="vitest/globals" />

import * as matchers from 'vitest-axe/matchers';
import { expect } from 'vitest';
expect.extend(matchers);

import 'vitest-canvas-mock';
import '@testing-library/jest-dom/vitest';
