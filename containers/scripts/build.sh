#!/usr/bin/env bash

ORIGINAL_PATH=$(pwd)

THIS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${THIS_DIR}/../../" && pwd)"

CONTAINERS_DIR="${REPO_ROOT}/containers"
BUILD_ENV="dev"
BUILDKIT_PROGRESS=

if ! command -v docker compose version &>/dev/null; then
    echo "[ERROR] Docker Compose is not installed."
    exit 1
fi

function cleanup() {
    cd "${ORIGINAL_PATH}"
}
trap cleanup EXIT

function print_help() {
    echo ""
    echo "Docker Compose stack build script."
    echo ""
    echo "Usage:"
    echo "  -e|--env [string]   Set the container environment. Use values like 'dev' and 'prod'."
    echo "  -v|--verbose        Enable verbose Docker logging"
    echo "  -h|--help           Print this help menu."
    echo ""
}

while [[ $# -gt 0 ]]; do
    case $1 in
        -e|--env)
            if [[ -z $2 ]]; then
                echo "[ERROR] --env provided but no env string given."

                print_help
                exit 1
            fi

            case "$2" in
                d|dev|development)
                    BUILD_ENV="dev"

                    ;;
                p|prod|production)
                    BUILD_ENV="prod"
                    ;;
                *)
                    echo "[ERROR] Invalid environment: $2"

                    print_help
                    exit 1
                    ;;
            esac

            shift 2
            ;;
        -h|--help)
            print_help
            exit 0
            ;;
        -v|--verbose)
            BUILDKIT_PROGRESS="plain"
            shift
            ;;
        *)
            echo "[ERROR] Invalid argument: $1"

            print_help
            exit 1
            ;;
    esac
done

export BUILDKIT_PROGRESS=$BUILDKIT_PROGRESS

case "$BUILD_ENV" in
    dev)
        if [[ ! -f "${CONTAINERS_DIR}/dev.compose.yml" ]]; then
            echo "Requested build for development environment, but could not find compose file at path: ${CONTAINERS_DIR}/dev.compose.yml"
            exit 1
        fi

        cmd=(docker compose -f "${CONTAINERS_DIR}/dev.compose.yml" build)
        ;;
    prod)
        if [[ ! -f "${CONTAINERS_DIR}/compose.yml" ]]; then
            echo "Requested build for production environment, but could not find compose file at path: ${CONTAINERS_DIR}/compose.yml"
            exit 1
        fi

        cmd=(docker compose -f "${CONTAINERS_DIR}/compose.yml" build)
        ;;
esac

echo ""
echo "Building [$BUILD_ENV] environment."
echo "  Command: ${cmd[*]}"
echo ""

cd "$REPO_ROOT"

"${cmd[@]}"
if [[ $? -ne 0 ]]; then
    echo ""
    echo "[ERROR] Failed to build $BUILD_ENV environment."
    exit $?
else
    echo ""
    echo "Built $BUILD_ENV environment."
    exit 0
fi
