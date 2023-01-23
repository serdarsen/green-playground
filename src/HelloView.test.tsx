import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import HelloView from './HelloView';

describe('Hello view test', () => {
	test('should exist hello text', () => {
		render(<HelloView />);

		expect(screen.getByText(/Hello/i)).toBeDefined();
	});
});
