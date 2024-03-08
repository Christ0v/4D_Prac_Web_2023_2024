#include <iostream>

using namespace std;

int ILOCZYN(int liczba1, int liczba2)
{
	return liczba1 * liczba2;
}

int main()
{
	int liczba1, liczba2;
	cout << "Podaj pierwsza liczbe: " << endl;
	cin >> liczba1;
	cout << "Podaj druga liczbe: " << endl;
	cin >> liczba2;
	cout << "Twoim wynikiem jest: " << ILOCZYN(liczba1, liczba2);
}