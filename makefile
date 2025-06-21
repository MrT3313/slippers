# PACKAGE MANAGEMENT ##########################################################
i:
	npm install
ri:
	rm -rf node_modules package-lock.json
	make i

# LINTING & FORMATTING ########################################################
lint:
	@$(NODE_MANAGE) && npm run lint
format:
	@$(NODE_MANAGE) && npm run format

laf:
	$(MAKE) lint
	$(MAKE) format

# SYMLINK MANAGEMENT ##########################################################
command=slippers

link: build
	@echo "Creating global symlink for slippers..."
	npm link
	@echo "Symlink '$(command)' should now be linked globally."
	@echo "Run 'make check-link' or 'which slippers' to verify."

unlink:
	@echo "Removing global symlink for slippers..."
	npm unlink $(command)
	@echo "Symlink '$(command)' should now be unlinked."
	@echo "Run 'make check-link' or 'which slippers' to verify (it should ideally not be found, or report an error)."

check-link:
	@echo "-----------------------------------------------------"
	@echo "Checking symlink status for '$(command)':"
	@if command -v $(command) >/dev/null 2>&1; then \
		echo "✅ '$(command)' is in your PATH at: $$(which $(command))"; \
		echo "   It links to: $$(readlink $$(which $(command)))"; \
		echo "   The global package links to: $$(readlink $$(npm root -g)/$(command))"; \
	else \
		echo "❌ '$(command)' not found in your PATH."; \
	fi
	@echo "-----------------------------------------------------"

# LOCAL PUBLISHING (FOR TESTING) ##############################################
# Note: Official releases are handled by the 'Publish Package' GitHub Action.
# This is for local testing of the publish process only.
pack:
	npm pack

dry-run:
	npm publish --dry-run

PUBLISH_TAG=alpha
publish-local:
	@echo "WARNING: This is for local testing only."
	npm publish --tag $(PUBLISH_TAG)